let tempSpan = document.querySelector('#temperature')
let windSpan = document.querySelector('#windspeed')
let chillSpan = document.querySelector('#windchill')

function showWindChill(temp, wind){
    if (temp > 50 || wind <= 3){
        chillSpan.innerText = 'N/A'
    return
    }

    chillFactor = wind ** 0.16
    chill = 35.74 + (0.6215 * temp) - (35.75 * chillFactor) + (0.4275 * temp * chillFactor)
    chillSpan.innerHTML = `${chill.toFixed(0)}&deg;F`
}
showWindChill(parseInt(tempSpan.innerText), parseInt(windSpan.innerText))