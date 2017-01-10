$(document).ready(function() {

  $("#new_sighting").on("click", function() {

    var year = $("#start_date_year").val();
    var month = $("#start_date_month").val();
    var day = $("#start_date_day").val();
    var hour = $("#start_time_hour").val();
    var minute = $("#start_time_minute").val();
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();
    var animal_id = $("#animal_id").val();

    // Create a sighting JSON object
    newSighting = {
      "sighting": {
        "date": year + "-" + month + "-" + day,
        "time": + hour + ":" + minute,
        "latitude": latitude,
        "longitude": longitude,
        "animal_id": animal_id
      }
    };

    // Alert that you're sending the message
    // alert("Sending message: " + JSON.stringify(newSighting));

    // Create the AJAX call
    $.ajax({
      dataType: 'json',
      url: '/sightings',
      method: 'POST',
      data: newSighting,
      success: function(dataFromServer) {
        // alert("Received message: " + JSON.stringify(dataFromServer));
        add_to_sightings_list(dataFromServer);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Add new sighting failed: " + errorThrown);
      }
    });
  });
});

// Function that displays object on webpage
function add_to_sightings_list(data) {
  $("#sightings_list").append(
    '<tr>' +
    // Sighting date
    '<td>' + data.date + '</td>' +
    // Sighting time
    '<td>' + data.time + '</td>' +
    // Sighting latitude
    '<td>' + data.latitude + '</td>' +
    // Sighting longitude
    '<td>' + data.kingdom + '</td>' +
    // Sighting show
    '<td><a href="/sightings/' + data.id + '">Show</a></td>' +
    // Sighting edit
    '<td><a href="/sightings/' + data.id + '/edit">Edit</a></td>' +
    // Sighting destroy
    '<td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/sightings/' + data.id + '">Destroy</a></td>' + '</tr>'
  );
}
