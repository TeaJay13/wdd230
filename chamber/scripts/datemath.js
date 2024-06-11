
// Gets last visited date from local storage and displays it on the page, checks if it is your first visit, will dispolay day and welcome message for first day, if not it will display date and welcome back message
let lastVisited = localStorage.getItem('lastVisited');
if (lastVisited === null) {
    document.getElementById('lastVisited').textContent = 'Welcome to the Chamber of Secrets! Today is: ' + currentDate + '. Enjoy your stay!';
} else {
    document.getElementById('lastVisited').textContent = 'Welcome back! You last visited on: ' + lastVisited + '.';
}


// Gets current date and time and displays it on the page
let currentDate = new Date();
document.getElementById('currentDate').textContent = currentDate;

// Saves current date and time to local storage
localStorage.setItem('lastVisited', currentDate);
