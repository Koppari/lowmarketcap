const cryptoRouter = require('express').Router()
const coinmarketcap = require('coinmarketcap')
global.fetch = require('node-fetch')

cryptoRouter.get('/', async(req, res) => {
    let cryptos = await coinmarketcap.ticker({limit: 0})
    let relevantInfo = Object
        .values(cryptos)
        .map(c => {
            return {
                id: c.id,
                name: c.name,
                rank: c.rank,
                symbol: c.symbol,
                price_usd: c.price_usd,
                volume: c['24h_volume_usd'],
                circulating_supply: c.circulating_supply,
                total_supply: c.total_supply,
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