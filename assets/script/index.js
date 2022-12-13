const loadDiv = document.getElementById('overlay')

mapboxgl.accessToken = 'pk.eyJ1IjoiYnJlbmRhbmdhbG1hbiIsImEiOiJja3hkaDY3ejMwZDhoMnZwZXByMDV2enQ5In0.hHhzrbbSrPpNQbtmaO2b-g';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-51.92528, -14.235004],
  zoom: 5
});

function getUserLocation() {
  if (navigator.geolocation) {
    
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    locationResponse.innerHTML = "Geolocation is not supported by this browser.";
  }
}