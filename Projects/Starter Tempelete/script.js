document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name && email && message){
        document.getElementById("formStatus").textContent = "Thank you, " + name + "! Your message has been sent.";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formStatus").textContent = "Please fill out all fields!";
    }
});

// 💫 Scroll Animation Script
const animatedElements = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of element is visible
});

animatedElements.forEach(el => observer.observe(el));

// 🌙 LIGHT / DARK THEME TOGGLE
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load theme preference if it exists
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Change button icon
    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});
