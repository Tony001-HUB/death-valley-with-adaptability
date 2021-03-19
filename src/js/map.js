function initMap() {

  let options = {
  enableHighAccuracy: true,
  timeout: 15000,
  maximumAge: 0
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options);
}

function success(pos) {
  let crd = pos.coords;

  let map = L.map('map').setView([crd.latitude, crd.longitude], 13);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([crd.latitude, crd.longitude]).addTo(map)
      .openPopup();
};
  
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);

  let map = L.map('map').setView([53.9000000, 27.5666700], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([53.9000000, 27.5666700]).addTo(map)
    .bindPopup('Geolocation disabled')
    .openPopup();
};
  
initMap();