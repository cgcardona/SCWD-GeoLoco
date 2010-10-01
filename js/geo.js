// function that gets the users geolocation
function getGeo() {

  // Get the current position with the HTML5 geolocation API
  navigator.geolocation.watchPosition(function(position, handle_error, enableHighAccuracy) {
  
    // assign the geolocation properties to variables
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // use jQuery to create some markup and dynamically insert it into the DOM.
    $('#lat').html(latitude)
    $("#lon").html(longitude)

  }
}
