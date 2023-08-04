// Side Nav
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }




// Function to open the modal and display the car details
// function openModal(carName, engine, price, location) {
//   const modal = document.getElementById("myModal");
//   const modalTitle = document.getElementById("modalTitle");
//   const modalContent = document.getElementById("modalContent");

//   modalTitle.textContent = carName;
//   modalContent.innerHTML = "<p>Engine: " + engine + "</p>" +
//                            "<p>Price: " + price + "</p>" +
//                            "<p>Location: " + location + "</p>";

//   modal.style.display = "block";
// }

// Function to close the modal
// function closeModal() {
//   const modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }

// Get all elements with class name 'f-row' and 's-row'
// const fRows = document.querySelectorAll(".f-row");
// const sRows = document.querySelectorAll(".s-row");

// Add click event listeners to fRows
// fRows.forEach((row) => {
//   row.addEventListener("click", () => {
//     const carName = row.querySelector("h4").textContent;
//     const engine = row.querySelector("p:nth-child(2)").textContent.split(":")[1].trim();
//     const price = row.querySelector("p:nth-child(3)").textContent.split(":")[1].trim();
//     const location = row.querySelector("p:nth-child(4)").textContent.split(":")[1].trim();

//     openModal(carName, engine, price, location);
//   });
// });

// Add click event listeners to sRows
// sRows.forEach((row) => {
//   row.addEventListener("click", () => {
//     const carName = row.querySelector("h4").textContent;
//     const engine = row.querySelector("p:nth-child(2)").textContent.split(":")[1].trim();
//     const price = row.querySelector("p:nth-child(3)").textContent.split(":")[1].trim();
//     const location = row.querySelector("p:nth-child(4)").textContent.split(":")[1].trim();

//     openModal(carName, engine, price, location);
//   });
// });

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//    if (event.target == modal) {
//      modal.style.display = "none";
//    }
//  }
