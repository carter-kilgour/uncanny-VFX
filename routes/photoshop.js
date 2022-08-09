const express = require('express')
const Photoshop = require('../models/photoshops')
const router = express.Router()



console.log('opened home router page')
router.get('/', async (req, res) => {
    console.log('inside our home router')

    res.render('photoshop/index')
})





module.exports = router