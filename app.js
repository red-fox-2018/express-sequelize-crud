const express = require('express')
const routes = require('./routes')
//const Controller = require('./controller.js')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.use(routes)

app.listen(3000, () => console.log('Connection port 3000 !!'))