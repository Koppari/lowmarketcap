const cryptoRouter = require('express').Router()
const coinmarketcap = require('coinmarketcap')
const shortid = require('shortid')
global.fetch = require('node-fetch')

cryptoRouter.get('/', async(req, res) => {
    let cryptos = await coinmarketcap.ticker({limit: 0})
    let relevantInfo = Object
        .values(cryptos)
        .map(c => {
            return {
                name: c.name,
                symbol: c.symbol,
                mcap: c.market_cap_usd,
                price_usd: c.price_usd,
                id: c.id,
                rId: shortid.generate()
            }
        })
    res.send(relevantInfo)
})

cryptoRouter.get('/:id', async(req, res) => {
    let crypto = await coinmarketcap.tickerByAsset(req.params.id)
    res.send(crypto)
})

module.exports = cryptoRouter