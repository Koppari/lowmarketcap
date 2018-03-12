const cryptoRouter = require('express').Router()
const coinmarketcap = require('coinmarketcap')
const shortid = require('shortid')
global.fetch = require('node-fetch')


cryptoRouter.get('/', async(req, res) => {
    let cryptos = await coinmarketcap.ticker({limit: 0})
    let relevantInfo = Object
        .values(cryptos)
        .map(c => {
            return {name: c.name, symbol: c.symbol, mcap: c.market_cap_usd, id: shortid.generate()}
        })
        .filter(c => c.mcap <= 100000000)
    res.send(relevantInfo)
})

module.exports = cryptoRouter