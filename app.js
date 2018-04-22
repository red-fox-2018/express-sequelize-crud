const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./routes/index');

app.use(bodyParser.urlencoded({
  extended: false
}))

app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(3000, () => {
  console.log('App Listening On Port 3000')
})
