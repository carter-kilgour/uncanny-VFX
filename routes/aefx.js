const express = require('express')
const Aefx = require('../models/aefxs')
const router = express.Router()



console.log('opened home router page')
router.get('/', async (req, res) => {
    console.log('inside our home router')

    res.render('after-effects/index')
})





module.exports = router