/*Google Maps Features*/
/*Feature 1*/
new google.maps.Marker({
  position: {lat: -34.397, lng: 150.644},
  map,
  title: "Hello World!",
});

/*Feature 2*/
map.setStreetView(new google.maps.StreetViewPanorama(
  document.getElementById('map'), {
    position: {lat: -34.397, lng: 150.644},
    pov: { heading: 165, pitch: 0 }
  }
));

/*Feature 3*/
const infoWindow = new google.maps.InfoWindow({
  content: "<h2>My Location</h2><p>This is a cool spot.</p>"
});
marker.addListener("click", () => {
  infoWindow.open(map, marker);
});

/* Image Slider */
document.addEventListener('DOMContentLoaded', function () {
  const slider = new Swiper('.slider', {
    loop: true,
    pagination: {
      el: '.slider-sequence',
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