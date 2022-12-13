const loadDiv = document.getElementById('overlay')

mapboxgl.accessToken = 'pk.eyJ1IjoiYnJlbmRhbmdhbG1hbiIsImEiOiJja3hkaDY3ejMwZDhoMnZwZXByMDV2enQ5In0.hHhzrbbSrPpNQbtmaO2b-g';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-51.92528, -14.235004],
  pitch: 40,
  zoom: 16
});

map.dragPan.disable();
map.keyboard.disable();
map.scrollZoom.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();

const marker = new mapboxgl.Marker({
  color: '3898ff'
});

function getLocation(position){
  const {longitude, latitude} = position.coords;

  if (longitude && latitude) {
    map.setCenter([longitude,latitude])
    marker.setLngLat([longitude,latitude]).addTo(map);
    setTimeout(() => {overlay.style.display = 'none'}, 750)
  }
}

function errorHandler(event) {
  loading.style.animationPlayState = 'paused';
  console.log(event.message);
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 0
};


if (navigator.geolocation) {
  navigator.geolocation.watchPosition(getLocation, errorHandler, options);
} else { 
  console.log('geolocation is not supported by your browser')
}