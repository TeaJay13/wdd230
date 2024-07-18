// Sets the current year in the footer
let year = new Date().getFullYear()
let curretnYearSpan = document.querySelector('#current-year')
curretnYearSpan.innerHTML = `Year: ${year}`

//Sets last modified date in the footer
let lastModifiedParagraph = document.getElementById('last-modified')
lastModifiedParagraph.innerHTML = `Last Modified: ${document.lastModified}`


//Sets the number of visits in the footer
let visits = getNumberOfVisits()
let visitSpan = document.getElementById('visits')
visitSpan.textContent = visits

function getNumberOfVisits() {
    let visitcount = localStorage.getItem('site-visits')
    if (visitcount == null) {
        visitcount = 0
    }
    else {
        visitcount = parseInt(visitcount)
    }
    visitcount = visitcount + 1
    localStorage.setItem('site-visits', `${visitcount}`)
    return visitcount
}