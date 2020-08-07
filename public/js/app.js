const countryForm = document.querySelector('form')
const search = document.querySelector('input')
const name = document.querySelector('#name')
const capital = document.querySelector('#capital')
const region = document.querySelector('#region')
const subregion = document.querySelector('#sub-region')
const population = document.querySelector('#population')
const borders = document.querySelector('#borders')
const flag = document.querySelector('#flag')
const flag_label = document.querySelector('#flag-label')

countryForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const country = search.value
    console.log(country);
    name.textContent = 'Loading...'
    capital.textContent = ''
    region.textContent = ''
    subregion.textContent = ''
    population.textContent = ''
    borders.textContent = ''
    flag.textContent = ''
    flag_label.textContent = ''

    fetch('/country?country=' + country).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                name.textContent = data.error
            } else {
                name.textContent = "Country Name : " + data.name
                capital.textContent = "Capital : " + data.capital
                region.textContent = "Region : " + data.region
                subregion.textContent = "Sub-Region : " + data.subregion
                population.textContent = "Population : " + data.population
                borders.textContent = "Borders : " + data.borders
                flag_label.textContent = "Flag : "
                flag.innerHTML = '<img src="' + data.flag + '" alt="flag" class="flag">'

            }

        })
    })
})