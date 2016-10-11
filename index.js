
/*
 * Displays a marker with an informational window
 */
function initMap() {
  "use strict";
  
  var site_BRWCM3 = {
    lat: parseFloat(39.32045),
    lng: parseFloat(-77.74242)
  };
  
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: site_BRWCM3
  });
  
  // Sample content for the textbox
  var contentString = "<div id='content'>" +
    "<p>Shenandoah River at Harper's Ferry WV at US Route 340 BR</p>" +
    "</div>";
  
  // Connect the textbox with the map
  var infoWindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  // Clickable marker
  var marker = new google.maps.Marker({
    position: site_BRWCM3,
    map: map,
    title: "Site BRWCM3"
  });
  
  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
}