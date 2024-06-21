const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let newsection = document.createElement('section');
        newsection.innerHTML = `
                <h2>${prophet.name} ${prophet.lastName}</h2>
                <p>Date of Birth: ${prophet.birthdate}</p>
                <p>Place of Birth: ${prophet.birthplace}</p>
                <img src="${prophet.imageurl}" alt="${prophet.name} ${prophet.lastName} img" loading="lazy" height="400" width="">`
        cards.append(newsection)
    });
    
}

async function getProphetData(){
    const response = await fetch(url)

    if (response.ok){
        const data = await response.json()
        // console.table(data)
        displayProphets(data.prophets)
    }
    else{
        console.log("This is not working.")
    }
}

getProphetData()