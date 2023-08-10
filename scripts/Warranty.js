// Side Nav
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  }
  
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Car Brands Warranty
const warrantyInfo = {
  audi: {
    text: "Audi offers a 3-year/36,000-mile basic warranty and a 5-year/60,000-mile powertrain warranty.",
    image: "WarrantyImg/wallpaperflare.com_wallpaper (2).jpg"
  },
  bmw: {
    text: "BMW provides a 4-year/50,000-mile basic warranty and a 4-year/50,000-mile powertrain warranty.",
    image: "WarrantyImg/wallpaperflare.com_wallpaper (1).jpg"
  },
  mercedes: {
    text: "Mercedes-Benz includes a 4-year/50,000-mile basic warranty and a 4-year/50,000-mile powertrain warranty.",
    image: "WarrantyImg/corrosion.jpeg"
  },
  lexus: {
    text: "Mercedes-Benz includes a 4-year/50,000-mile basic warranty and a 4-year/50,000-mile powertrain warranty.",
    image: "WarrantyImg/gettyimages-461062741-1-626x382-1614382609.jpg"
  },
  ford: {
    text: "Mercedes-Benz includes a 4-year/50,000-mile basic warranty and a 4-year/50,000-mile powertrain warranty.",
    image: "WarrantyImg/AdobeStock_288590637.jpg.webp"
  },
  honda: {
    text: "Mercedes-Benz includes a 4-year/50,000-mile basic warranty and a 4-year/50,000-mile powertrain warranty.",
    image: "WarrantyImg/RepairSmith-8.jpg"
  },
  toyota: {
    text: "Mercedes-Benz includes a 4-year/50,000-mile basic warranty and a 4-year/50,000-mile powertrain warranty.",
    image: "WarrantyImg/painting.jpeg"
  },
  kia: {
    text: "Mercedes-Benz includes a 4-year/50,000-mile basic warranty and a 4-year/50,000-mile powertrain warranty.",
    image: "WarrantyImg/images (1).jpg"
  },
  hyundai: {
    text: "Mercedes-Benz includes a 4-year/50,000-mile basic warranty and a 4-year/50,000-mile powertrain warranty.",
    image: "WarrantyImg/images.jpg"
  }
  // Add warranty information and image URLs for other car brands here
};

const warrantyDisplay = document.getElementById('warranty-info');

document.getElementById('audi-btn').addEventListener('click', () => displayWarranty('audi'));
document.getElementById('bmw-btn').addEventListener('click', () => displayWarranty('bmw'));
document.getElementById('mercedes-btn').addEventListener('click', () => displayWarranty('mercedes'));
document.getElementById('lexus-btn').addEventListener('click', () => displayWarranty('lexus'));
document.getElementById('ford-btn').addEventListener('click', () => displayWarranty('ford'));
document.getElementById('honda-btn').addEventListener('click', () => displayWarranty('honda'));
document.getElementById('toyota-btn').addEventListener('click', () => displayWarranty('toyota'));
document.getElementById('kia-btn').addEventListener('click', () => displayWarranty('kia'));
document.getElementById('hyundai-btn').addEventListener('click', () => displayWarranty('hyundai'));


function displayWarranty(brand) {
  warrantyDisplay.textContent = warrantyInfo[brand];
}

function displayWarranty(brand) {
  const brandImage = document.getElementById('brand-image');
  const warrantyText = document.getElementById('warranty-text');

  brandImage.src = warrantyInfo[brand].image;
  brandImage.alt = brand + " Car Brand";
  warrantyText.textContent = warrantyInfo[brand].text;
}
