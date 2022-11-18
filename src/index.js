const express = require('express')
const gameRouter = require('./router/game.route')

const app = express()
app.use(express.json())
app.use('/api/v1/cup', gameRouter)

app.listen(8087)
