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
    position: { lat: -34.397, lng: 150.644 },
    map,
    title: "Hello World!",
  });

  // Feature 2: Street View
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById('map'), {
      position: { lat: -34.397, lng: 150.644 },
      pov: { heading: 165, pitch: 0 }
    }
  );
  map.setStreetView(panorama);

  // Feature 3: Info Window
  const infoWindow = new google.maps.InfoWindow({
    content: "<h2>My Location</h2><p>This is a cool spot.</p>"
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}

