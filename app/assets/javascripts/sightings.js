$(document).ready(function() {

  $("#new_sighting").on("click", function() {
    alert("Start");

    var year = $("#sighting-date-1i").val();
    var month = $("#sighting-date-2i").val();
    var day = $("#sighting-date-3i").val();
    var hour = $("#sighting_time_1i").val();
    var minute = $("#sighting_time_2i").val();
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();
    var animal_id = $("#animal_id").val();
    // Create a sighting JSON object
    newSighting = {
      "sighting": {
        "date": year + "-" + month + "-" + day,
        // "time": + "T" + hour + ":" + minute,
        "latitude": latitude,
        "longitude": longitude,
        "animal_id": animal_id
      }
    };

    // Alert that you're sending the message
    alert("Sending message: " + JSON.stringify(newSighting));

    // Create the AJAX call
    $.ajax({
      dataType: 'json',
      url: '/sightings/new',
      method: 'POST',
      data: newSighting,
      success: function(dataFromServer) {
        alert("Received message: " + JSON.stringify(dataFromServer));
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Add new sighting failed: " + errorThrown);
      }
    });
  });
});
