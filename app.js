'use strict'

const express = require('express');
const router = require('./routers');


var app = express();

//SET VIEW ENGINE
app.set('view engine', 'ejs');

app.use('/', router);

app.listen(3000, () => {
  console.log('listening on port 3000');
})
