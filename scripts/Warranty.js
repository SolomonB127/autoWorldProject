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
    text: "Basic Warranty: 4 years/50,000 miles.Powertrain Warranty: 4 years/50,000 miles.Corrosion Perforation Warranty: 12 years/unlimited miles.Roadside Assistance: 4 years/unlimited miles",
    image: "WarrantyImg/wallpaperflare.com_wallpaper (2).jpg"
  },
  bmw: {
    text: "Baisc Warranty: 4 years/50,000 miles.Powertrain Warranty: 4 years/50,000 miles.Corrosion Perforation Warranty: 12 years/unlimited miles.Roadside Assistance: 4 years/unlimited miles",
    image: "WarrantyImg/wallpaperflare.com_wallpaper (1).jpg"
  },
  mercedes: {
    text: "Basic Warranty: 4 years/50,000 miles.Powertrain Warranty: 4 years/50,000 miles.Corrosion Warranty: 4 years/50,000 miles.Roadside Assistance: 4 years/50,000 miles.",
    image: "WarrantyImg/corrosion.jpeg"
  },
  lexus: {
    text: "Basic Warranty: 4 years/50,000 miles.Powertrain Warranty: 6 years/70,000 miles.Hybrid System Warranty: 8 years/100,000 miles.Roadside Assistance: 4 years.",
    image: "WarrantyImg/gettyimages-461062741-1-626x382-1614382609.jpg"
  },
  ford: {
    text: "Basic Warranty: 3 years/36,000 miles.Powertrain Warranty: 5 years/60,000 miles.Corrosion Warranty: 5 years/unlimited miles.Roadside Assistance: 5 years/60,000 miles.",
    image: "WarrantyImg/AdobeStock_288590637.jpg.webp"
  },
  honda: {
    text: "Basic Warranty: 3 years/36,000 miles. Powertrain Warranty: 5 years/60,000 miles.Hybrid Warranty: 8 years/100,000 miles.Roadside Assistance: 3 years.",
    image: "WarrantyImg/RepairSmith-8.jpg"
  },
  toyota: {
    text: "Basic Warranty: 3 years/36,000 miles.Powertrain Warranty: 5 years/60,000 miles.Hybrid Component Warranty: 8 years/100,000 miles.Roadside Assistance: 2 years.",
    image: "WarrantyImg/painting.jpeg"
  },
  kia: {
    text: "Basic Warranty: 5 years/60,000 miles.Powertrain Warranty: 10 years/100,000 miles.Corrosion Warranty: 5 years/unlimited miles.Roadside Assistance: 5 years.",
    image: "WarrantyImg/images (1).jpg"
  },
  hyundai: {
    text: "Basic Warranty: 5 years/60,000 miles.Powertrain Warranty: 10 years/100,000 miles.Corrosion Warranty: 7 years/unlimited miles.Roadside Assistance: 5 years.",
    image: "WarrantyImg/images.jpg"
  }
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
