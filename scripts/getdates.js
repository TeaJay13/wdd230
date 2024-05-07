// Sets the current year in the footer
let year = new Date().getFullYear()
let curretnYearSpan = document.querySelector('#currentYear')
curretnYearSpan.innerHTML = `Year: ${year}`

//Sets last modified date in the footer
let lastModifiedParagraph = document.getElementById('lastModified')
lastModifiedParagraph.innerHTML = `Last Modified: ${document.lastModified}`