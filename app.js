
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs');
const port = process.env.PORT || 3000;

const teacher = require('./routes/teacher');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// :router/teacher
app.use('/teacher', teacher);

app.get('*', (req, res) => {
  res.send('Page unavailable!');
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});