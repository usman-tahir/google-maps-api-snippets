
// Suggessted sites with relevant data
var MAP_LOCATIONS = [
  ["BRWCM3", 39.32045, -77.74242, "Shenandoah River at Harper's Ferry WV<br>(US Route 340 BR)<br>"],
  ["BRWCM2", 39.29144, -77.7841, "Shenandoah River at Millville WV<br>(US Route 340 BR)<br>"],
  ["FC01", 39.04164, -78.00064, "Shenandoah River at Berrys VA<br>(US Route 50 BR - Berry's Landing)<br>"],
  ["FC08", 39.12392, -77.89119, "Shenandoah River near Webbtown VA<br>(Harry Byrd Highway Rout 7 BR)<br>"],
  ["NS15", 38.9767, -78.3368, "NF Shenandoah River near Strasburg VA<br>(Front Royal Road - Route 55)<br>"],
  ["TBV2", 38.652, -78.6977, "NF Shenandoah River near Timberville VA<br>(New Market Depot Road - Route 728)<br>"],
  ["FW14", 38.91328, -78.20971, "SF Shenandoah Road at Front Royal VA Water Intake<br>(Luray VA)<br>"],
  ["FP05", 38.80139, -78.36778, "SF Shenandoah River near Overall VA<br>(Page Valley Road - VA Route 717, Burner's Bottom)<br>"],
  ["FP01", 38.48222, -78.62750, "SF Shenandoah River at Shenandoah VA<br>(E Point Road - VA Route 602)<br>"],
  ["NR02", 38.6197, -78.795, "NF Shenandoah in Broadway at Route 1411<br>(above Linville Creek)<br>"],
  ["GA36", 38.30611, -78.89333, "North River near Weyers Cave VA<br>(Keezletown Road BR - VA Route 276)<br>"],
  ["GA01", 38.29581, -78.80796, "South River at Port Republic VA off Tiger Camp Road<br>(VA Route 1604)<br>"],
  ["GA10", 38.26183, -78.86199, "Middle River near Grottoes VA at Snowflake Mill Road<br>(VA Route 769 - Mt Meridan BR)<br>"]
];

// Initialize the Suggested Sites map
function initSiteMap() {
  "use strict";
  
  // Holds all the marker objects
  var googleMapMarkers = [];
  
  // HTML for the selection menu
  var markerOptionsForSelection = [];
  
  // Single InfoWIndow Object to handle displaying InfoWindows
  var infoWindow = new google.maps.InfoWindow();
  
  // Map instance
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: new google.maps.LatLng(39, -78) // Approximation based on rounding from the Suggested sites
  });
  
  // Place the markers onto the map
  function placeMarker(location) {
    var latLng = new google.maps.LatLng(location[1], location[2]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: location[0]
    });
    
    googleMapMarkers.push(marker);
    console.log("added the", marker.title, "marker to googleMapMarkers");
    
  }
  
  for (var i = 0; i < MAP_LOCATIONS.length; i += 1) {
    placeMarker(MAP_LOCATIONS[i]);
  }
}