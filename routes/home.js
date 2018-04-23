const app = require('express').Router();

app.get('/', (req,res)=>{
    res.render('../views/home.ejs')
})

module.exports = app;