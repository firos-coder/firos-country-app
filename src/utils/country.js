const request = require('postman-request')
const { json } = require('express')


const country = (address, callback) => {
    const url = 'https://restcountries.eu/rest/v2/name/' + address
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to country services!', undefined)
        } else if (body.status) {
            callback('Unable to find to country, try another search!', undefined)
        } else {
            callback(undefined, {
                name: body[0].name,
                capital: body[0].capital,
                region: body[0].region,
                subregion: body[0].subregion,
                population: body[0].population,
                borders: body[0].borders,
                flag: body[0].flag
            })
        }
    })
}

module.exports = country

