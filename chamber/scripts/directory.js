document.addEventListener("DOMContentLoaded", async function() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const directoryContainer = document.querySelector('#directory-container');

    members.forEach(member => {
        const memberCard = `
            <div class="card">
                <img class="member-imgs"  loading="lazy" src="images/${member.icon}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.additionalInfo}</p>
            </div>
        `;
        directoryContainer.innerHTML += memberCard;
    });
});


function toggleView(viewType) {
    const container = document.getElementById('directory-container');
    if (viewType === 'list') {
        container.className = 'list-view'; // Set the container to list view mode
    } else {
        container.className = 'grid-view'; // Set the container to grid view mode
    }
}
