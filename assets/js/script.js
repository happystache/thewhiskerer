document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu-left");

    hamburger.addEventListener("click", function() {
        // Toggle the 'active' class on the hamburger for animation
        hamburger.classList.toggle("active");

        // Toggle the 'dropdown' class on the menu to control visibility
        menu.classList.toggle("dropdown");

        // Ensure the menu becomes visible when toggling the 'active' state
        menu.classList.toggle("active");
    });
});
