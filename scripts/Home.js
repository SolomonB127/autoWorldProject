// Side Nav
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// Review slider
document.addEventListener('DOMContentLoaded', function () {
  var myCarousel = document.querySelector('#customerReviewSlider');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000, // Adjust the interval (optional)
  });
});
