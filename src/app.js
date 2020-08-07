const express = require('express')
const hbs = require('hbs')
const path = require('path')
const countryDetails = require('./utils/country')

const app = express()
const port = process.env.PORT || 3000

const publicDirectory = path.join(__dirname, '../public/')
const viewsPath = path.join(__dirname, '../templates/views/')
const partialPath = path.join(__dirname, '../templates/partials/')

app.use(express.static(publicDirectory))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)



app.get('/', (req, res) => {
    res.render('index', {
        name: 'Firos Dev'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        name: 'Firos Dev',
        help: 'This is some helpful text!'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Firos Dev'
    })
})
app.get('/country', (req, res) => {
    const country = req.query.country
    if (!country) {
        return res.send('Please provide a cuntry name!')
    }
    countryDetails(country, (error, data) => {
        if (error) {
            return res.send({ error })
        }
        res.send(data)
    })

})

app.get('*', (req, res) => {
    res.render('404', {
        error: 'Page not found'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})