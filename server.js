const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const Game = require('./models/games')
const Aefx = require('./models/aefxs')
const Photoshop = require('./models/photoshops')
const Illustrator = require('./models/illustrators')
const articleRouter = require('./routes/articles')
const gameRouter = require('./routes/game')
const aefxRouter = require('./routes/aefx')
const photoshopRouter = require('./routes/photoshop')
const illustratorRouter = require('./routes/illustrator')
const homeRouter = require('./routes/home')
const methodOverride = require('method-override')
const games = require('./models/games')
const aefxs = require('./models/aefxs')
const photoshops = require('./models/photoshops')
const illustrators = require('./models/illustrators')
const app = express()

mongoose.connect('mongodb://localhost/review')

app.set('view engine', 'ejs')

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {

    const games = await Game.find()
    res.render('home/home', { games: games },)
})


// const articles = await Article.find().sort({
// createdAt: "desc"
// })

// res.render('articles/index', { articles: articles })

app.use('/articles', articleRouter)
app.use('/home', homeRouter)
app.use('/fighting-game', gameRouter)
app.use('/after-effects', aefxRouter)
app.use('/photoshop', photoshopRouter)
app.use('/illustrator', illustratorRouter)
app.listen(5000)