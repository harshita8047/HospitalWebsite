// Toggle menu and navbar
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Correcting window scroll event to hide menu and navbar
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// Swiper for home slider
var homeSwiper = new Swiper(".home-slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let visibleCount = 8; // Number of boxes visible initially
const boxes = document.querySelectorAll('.packages .box');
const loadMoreButton = document.querySelector('.packages .load-more');

function updateVisibleBoxes() {
    boxes.forEach((box, index) => {
        if (index < visibleCount) {
            box.style.display = 'block'; // Show the box
        } else {
            box.style.display = 'none'; // Hide the box
        }
    });
}

// Initial display setup
updateVisibleBoxes();

loadMoreButton.addEventListener('click', () => {
    visibleCount += 4; // Increase count by 3 or any number you prefer
    updateVisibleBoxes();

    // Hide button if all boxes are visible
    if (visibleCount >= boxes.length) {
        loadMoreButton.style.display = 'none';
    }
});
