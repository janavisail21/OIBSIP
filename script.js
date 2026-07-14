// Welcome Message
window.onload = function () {
    alert("Welcome to Janavi's Portfolio!");
};

// Smooth Scroll Effect
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        console.log("Navigating...");
    });
});

// Footer Year
console.log("Portfolio Loaded Successfully!");