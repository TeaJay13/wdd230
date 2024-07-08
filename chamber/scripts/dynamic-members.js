document.addEventListener("DOMContentLoaded", async function() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const dynamicMembers = document.querySelector('#dynamic-members');

    // Filter members by membership level Grail Knight and Champion of the Round Table only.
    const filteredMembers = members.filter(member => 
        member.membershipLevel === "Grail Knight" || member.membershipLevel === "Champion of the Round Table"
    );

    // Function to get a specified number of random members
    function getRandomMembers(array, num) {
        const randomMembers = [];
        const selectedIndex = new Set();
        
        while (randomMembers.length < num && randomMembers.length < array.length) {
            const randomIndex = Math.floor(Math.random() * array.length);
            if (!selectedIndex.has(randomIndex)) {
                randomMembers.push(array[randomIndex]);
                selectedIndex.add(randomIndex);
            }
        }
        
        return randomMembers;
    }

    // Get 3 random members
    const randomMembers = getRandomMembers(filteredMembers, 3);

    // Display the random members
    randomMembers.forEach(member => {
        const memberCard = `
            <div class="card">
                <img class="member-imgs" loading="lazy" src="images/${member.icon}" alt="${member.name}" height="300">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.additionalInfo}</p>
            </div>
        `;
        dynamicMembers.innerHTML += memberCard;
    });
});
