const cryptoRouter = require('express').Router()
const coinmarketcap = require('coinmarketcap')
global.fetch = require('node-fetch')

cryptoRouter.get('/', async(req, res) => {
    let cryptos = await coinmarketcap.ticker({limit: 0})
    let relevantInfo = Object
        .values(cryptos)
        .map(c => {
            return {
                ...c,
                volume: c['24h_volume_usd'],
                mcap: c.market_cap_usd,
                change: c.percent_change_24h
            }
        })
    res.send(relevantInfo)
})

cryptoRouter.get('/:id', async(req, res) => {
    let crypto = await coinmarketcap.tickerByAsset(req.params.id)
    res.send(crypto)
})

module.exports = cryptoRouter