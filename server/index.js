const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)

const cryptoRouter = require('./controllers/cryptos')

const config = require('./utils/config')
const middleware = require('./utils/middleware')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json())
app.use('/api/cryptos', cryptoRouter)
app.use(middleware.error)

mongoose.connect(config.mongoUrl)
mongoose.Promise = global.Promise

server.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`)
})

server.on('close', () => {
    mongoose
        .connection
        .close()
})

module.exports = {
    app,
    server
}