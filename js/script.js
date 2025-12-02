// Simple message for form submission
function submitForm() {
    alert("Thank you! Your message has been sent.");
}

const hamburger = document.querySelector("nav .hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


// SHOW / HIDE BACK TO TOP BUTTON
window.addEventListener("scroll", function () {
    const button = document.getElementById("backToTop");
    if (window.scrollY > 300) {
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
});

// SCROLL TO TOP ON CLICK
document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
