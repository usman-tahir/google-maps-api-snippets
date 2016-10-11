var MAP_LOCATIONS = [
  ["BRWCM3", 39.32045, -77.74242],
  ["BRWCM2", 39.29144, -77.7841],
  ["FC01", 39.04164, -78.00064],
  ["FC08", 39.12392, -77.89119],
  ["NS15", 38.9767, -78.3368],
  ["TBV2", 38.652, -78.6977],
  ["FW14", 38.91328, -78.20971],
  ["FP05", 38.80139, -78.36778],
  ["FP01", 38.48222, -78.62750],
  ["NR02", 38.6197, -78.795],
  ["GA36", 38.30611, -78.89333],
  ["GA01", 38.29581, -78.80796],
  ["GA10", 38.26183, -78.86199]
];
  
function initSiteMap() {
  "use strict";
  var infoWindow = new google.maps.InfoWindow();
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: new google.maps.LatLng(39, -78)
  });
  
  function createMarkerPanel(marker) {
    // Create the sidebar button
    var ul = document.getElementById("marker-sidebar");
    var li = document.createElement("li");
    var title = marker.title;
    li.innerHTML = title;
    ul.appendChild(li);
    
    google.maps.event.addDomListener(li, "click", function () {
      google.maps.event.trigger(marker, "click");
    });
    
  }
  
  function placeMarker(location) {
    var latLng = new google.maps.LatLng(location[1], location[2]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: location[0]
    });
    
    createMarkerPanel(marker);
    
    google.maps.event.addListener(marker, "click", function () {
      infoWindow.close();
      infoWindow.setContent("<div id='info-window'>" + location[0] + "</div>");
      infoWindow.open(map, marker);
    });
  }
    
  for (var i = 0; i < MAP_LOCATIONS.length; i += 1) {
    placeMarker(MAP_LOCATIONS[i]);
  }
}