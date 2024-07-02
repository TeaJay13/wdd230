document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('meet-greet-banner');
    const closeButton = document.getElementById('close-banner');
    const currentDay = new Date().getDay();

    // Show banner only on Monday (1), Tuesday (2), and Wednesday (3)
    if (currentDay === 1 || currentDay === 2 || currentDay === 3) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }

    // Add click event to close button
    closeButton.addEventListener('click', function() {
        banner.style.display = 'none';
    });
});
