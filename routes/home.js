const express = require('express')
const Game = require('../models/games')
const router = express.Router()



console.log('opened home router page')
router.get('/', async (req, res) => {

    const games = await Game.find()
    res.render('home/home', { games: games },)
})


module.exports = router