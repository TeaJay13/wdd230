// Sets the current year in the footer
let year = new Date().getFullYear();
let currentYearSpan = document.querySelector('#currentYear');
currentYearSpan.innerHTML = `Year: ${year}`;

// Sets last modified date in the footer
let lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.innerHTML = `Last Modified: ${document.lastModified}`;

let darkbutton = document.getElementById("dark-mode");
darkbutton.addEventListener("click", () => {
    darkbutton.classList.toggle('dark');
    if (darkbutton.classList.contains('dark')){
        document.documentElement.style.setProperty('--background-color', 'black');
        document.documentElement.style.setProperty('--header-color', '#FFD700');
        document.documentElement.style.setProperty('--card-color', '#edc531');
        document.documentElement.style.setProperty('--accent-color', '#edc531');
        document.documentElement.style.setProperty('--text-color', 'white');
        darkbutton.style.color = 'black';  // Change button text color to black
        document.getElementById("dark-mode").innerHTML = "Light Mode ☀️";
    }
    else{
        document.documentElement.style.setProperty('--background-color', '#FDF0D5');
        document.documentElement.style.setProperty('--header-color', '#651214');
        document.documentElement.style.setProperty('--card-color', '#912B2C');
        document.documentElement.style.setProperty('--accent-color', '#edc531');
        document.documentElement.style.setProperty('--text-color', 'black');
        darkbutton.style.color = '';  // Reset button text color to default
        document.getElementById("dark-mode").innerHTML = "Dark Mode 🌙";
    }
    
});
