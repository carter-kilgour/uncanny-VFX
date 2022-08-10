const express = require('express')
const Illustrator = require('../models/illustrators')
const router = express.Router()



console.log('opened home router page')
router.get('/', async (req, res) => {
    console.log('inside our home router')

    res.render('illustrator/index')
})





module.exports = router