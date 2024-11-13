document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu-left");

    hamburger.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});