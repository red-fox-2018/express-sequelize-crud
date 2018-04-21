
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs');
const routes = require('./routes');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/', routes);
app.get('*', (req, res) => {
  res.send('Page unavailable!');
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});