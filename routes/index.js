const express = require('express');
const router = express()


router.get('/', (req, res)=> {
    res.send('HOME')
})

module.exports = router