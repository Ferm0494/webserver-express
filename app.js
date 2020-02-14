const express = require('express')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT || 8080
require('./hbs/helpers')

//express
app.use(express.static(__dirname + '/public'))

//Handlebars
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Fernando'
    })

    app.get('/about', (req, res) => {

        res.render('about', {
            nombre: 'Fernando'
        })
    })


}).listen(port, () => {
    console.log('Desplegando server....');

})