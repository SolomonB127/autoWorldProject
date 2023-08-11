// Side Nav
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Cars Catalogue
function toggleDetails(carId) {
    var details = document.getElementById(carId + "-details");
    details.style.display = details.style.display === "block" ? "none" : "block";
}