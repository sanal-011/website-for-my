const menuToggle = document.getElementById("showBtn");
const menu = document.querySelector(".menu");
const gap = document.querySelector(".container");
const navbar = document.querySelector("#navbar");
const topBTN = document.querySelector(".top-btn");
const navLinks = document.querySelectorAll(".nav_links");
// const nav_Links = document.querySelectorAll(".nav_links");


const updateMenu = () => {
  const isActive = menu.classList.contains("active");

  menuToggle.innerHTML = isActive ? "&#10006;" : "&#9776;";
};

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  updateMenu();
});

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav_links")) {
    menu.classList.remove("active");
    updateMenu();
  }
});


window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBTN.classList.add("show");
  }
  else {
    topBTN.classList.remove('show');
  }
});
// Scroll to top 
topBTN.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  // Remove button immediately 
  topBTN.classList.remove("show");
});



navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const sectionId = link.dataset.section;
    const section = document.getElementById(sectionId);

    section.scrollIntoView({
      behavior: "smooth"
    });
  });
});



//make navbar menu item active
navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    // Remove active from all buttons
    navLinks.forEach((item) => {
      item.classList.remove("button-active");
    });

    // Add active to clicked button
    link.classList.add("button-active");

  });

});

// const parent = document.querySelector(".inner-container-2");
// const smalls = document.querySelectorAll(".small");


// function randomPosition() {
//   const parentWidth = parent.offsetWidth;
//   const parentHeight = parent.offsetHeight;

//   const centerX = parentWidth / 2;
//   const centerY = parentHeight / 2;

//   const rangeX = parentWidth * 0.4;
//   const rangeY = parentHeight * 0.4;

//   smalls.forEach((small) => {
//     const smallWidth = small.offsetWidth;
//     const smallHeight = small.offsetHeight;

//     const minX = centerX - rangeX + smallWidth / 2;
//     const maxX = centerX + rangeX - smallWidth / 2;

//     const minY = centerY - rangeY + smallHeight / 2;
//     const maxY = centerY + rangeY - smallHeight / 2;

//     const x = Math.random() * (maxX - minX) + minX;
//     const y = Math.random() * (maxY - minY) + minY;

//     small.style.left = `${x}px`;
//     small.style.top = `${y}px`;

//      // Restart animation
//     small.style.animation = "none";
//     small.offsetHeight; // force reflow
//     small.style.animation = "";
//   });
// }

// randomPosition();
// setInterval(() => {
//   randomPosition();
// }, 4000);
const map = document.querySelector("#locationMap");

// Your fixed location
const latitude = 8.697402;
const longitude = 76.813681;

// Google Maps embed URL
const mapURL =
  `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`;

// Display the map
map.src = mapURL;

const url = "https://api.jikan.moe/v4/anime/21";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });