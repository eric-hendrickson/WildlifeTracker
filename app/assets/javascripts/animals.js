$(document).ready(function() {

  $("#new_animal").on("click", function() {
    // Create an animal JSON object
    newAnimal = {
      "animal": {
        "common_name": $("#common_name").val(),
        "latin_name": $("#latin_name").val(),
        "kingdom": $("#kingdom").val()
      }
    }

    // Alert that you're sending the message
    // alert("Sending message: " + JSON.stringify(newAnimal));

    // Create the AJAX call
    $.ajax({
      dataType: 'json',
      url: '/animals',
      method: 'POST',
      data: newAnimal,
      success: function(dataFromServer) {
        // alert("Received message: " + JSON.stringify(dataFromServer));
        add_to_animal_list(dataFromServer);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Add new animal failed: " + errorThrown);
      }
    });
  });
});

// Function that displays object on webpage
function add_to_animal_list(data) {
  $("#animals_list").append(
    '<tr>' +
    // Animal common name
    '<td>' + data.common_name + '</td>' +
    // Animal Latin name
    '<td>' + data.latin_name + '</td>' +
    // Animal kingdom
    '<td>' + data.kingdom + '</td>' +
    // Animal show
    '<td><a href="/animals/' + data.id + '">Show</a></td>' +
    // Animal edit
    '<td><a href="/animals/' + data.id + '/edit">Edit</a></td>' +
    // Animal destroy
    '<td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/animals/' + data.id + '">Destroy</a></td>' + '</tr>'
  );
}
