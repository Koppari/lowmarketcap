const cryptoRouter = require('express').Router()
const coinmarketcap = require('coinmarketcap')
global.fetch = require('node-fetch')

cryptoRouter.get('/', async(req, res) => {
    let cryptos = await coinmarketcap.ticker({limit: 0})
    let relevantInfo = Object
        .values(cryptos)
        .map(c => {
            return {name: c.name, symbol: c.symbol, mcap: c.market_cap_usd}
        })
        .filter(c => c.mcap < 10000000)
    res.send(relevantInfo)
})

module.exports = cryptoRouter