let darkbutton = document.getElementById("dark-mode");
darkbutton.addEventListener("click", () => {
    darkbutton.classList.toggle('dark');
    if (darkbutton.classList.contains('dark')){
        document.documentElement.style.setProperty('--background-color', 'black');
        document.documentElement.style.setProperty('--primary-color', 'grey');
        document.documentElement.style.setProperty('--secondary-color', 'white');
        document.documentElement.style.setProperty('--accent-color', '#651214');
    }
    else{
        document.documentElement.style.setProperty('--background-color', '#651214');
        document.documentElement.style.setProperty('--primary-color', '#FDF0D5');
        document.documentElement.style.setProperty('--secondary-color', '#912B2C');
        document.documentElement.style.setProperty('--accent-color', '#edc531');
    }
}); 