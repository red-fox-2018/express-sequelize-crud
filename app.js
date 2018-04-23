const express = require('express');
const router = require('./routes/routes');
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router)


app.set('view engine', 'ejs');

app.use('/', router)
app.listen(3000)
