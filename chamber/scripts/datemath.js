
const lastVisited = localStorage.getItem('lastVisited');
const date = new Date();
const lastVisitedMessage = document.getElementById('lastVisited');
const DAY_IN_MILLIS = 1000 * 60 * 60 * 24;

let currentDate = date.toDateString();
document.getElementById('currentDate').textContent = currentDate;

if (!lastVisited){
    lastVisitedMessage.textContent = 'Welcome to the Chamber of the Round Table!';
}
else if (date - lastVisited < DAY_IN_MILLIS){
    lastVisitedMessage.textContent = 'Welcome back!'
}
else{
    lastVisitedMessage.textContent = `Welcome back! You last visited ${Math.floor((date - lastVisited) / DAY_IN_MILLIS)}`
}

localStorage.setItem('lastVisited', date.getTime());



