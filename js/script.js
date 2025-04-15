/* Image Slider */
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});


// Google Maps
let map;

function initMap() {
  // Create map
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });

  // Feature 1: Marker
  const marker = new google.maps.Marker({
    position: { lat: -34.397, lng: 151.644 },
    map,
    title: "Hello World!",
  });

// Feature 2: Circle around the marker
  const circle = new google.maps.Circle({
    strokeColor: "#4a4e69",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#9a8c98",
    fillOpacity: 0.35,
    map,
    center: { lat: -34.397, lng: 151.644 },
    radius: 5000 // in meters (5km)
  });

  // Feature 3: Info Window
  const infoWindow = new google.maps.InfoWindow({
    content: "<h2>The Ocean</h2><p>Fish live here!</p>"
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}

initMap();