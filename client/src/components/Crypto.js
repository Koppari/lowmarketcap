import React from 'react'
const imgUrl = 'https://raw.githubusercontent.com/crypti/cryptocurrencies/master/images/'

const Crypto = ({crypto}) => {
    if (crypto == null) 
        return (
            <div className="ui large active loader"></div>
        )

    return (
        <div>
            <h2 className="ui centered borderless header">
                <img
                    src={`${imgUrl + crypto.symbol}.png`}
                    onError={(e) => {
                    e.target.src = `${imgUrl + crypto.symbol}.jpg`
                }}
                    alt={crypto.symbol}
                    className="ui image"/>
                <div className="content">{crypto.name}
                    <div className="sub header">{crypto.symbol}</div>
                </div>
            </h2>

            <div className="ui divider"></div>
            <div>Market cap: {crypto.mcap}$</div>
            <div>Price: {crypto.price_usd}$</div>
        </div>
    )
}

export default Crypto