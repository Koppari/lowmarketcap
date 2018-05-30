import React from 'react'
import NumberFormat from 'react-number-format'
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
                    onError={(e) => {
                    e.target.src = 'https://screenshotlayer.com/images/assets/placeholder.png'
                }}
                    src={`${imgUrl + crypto.symbol}.png`}
                    alt={crypto.symbol}
                    className="ui image"/>
                <div className="content">{crypto.name}
                    <div className="sub header">{crypto.symbol}</div>
                </div>
            </h2>

            <div className="ui divider"></div>

            <div className="ui grid container">
                <div className="four wide column">
                    <div className="header">Market cap:</div>
                    <NumberFormat
                        value={crypto.mcap === null
                        ? 'Unknown'
                        : crypto.mcap}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}/>
                </div>
                <div className="four wide column">
                    <div className="header">Price:</div>
                    <NumberFormat
                        value={crypto.price_usd === null
                        ? 'Unknown'
                        : crypto.price_usd}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}/>
                </div>
                <div className="four wide column">
                    <div className="header">Change (24h):</div>
                    {crypto.change}%
                </div>
                <div className="four wide column">
                    <div className="header">Volume (24h):</div>
                    <NumberFormat
                        value={crypto.volume === null
                        ? 'Unknown'
                        : crypto.volume}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}/>
                </div>

            </div>
        </div>
    )
}

export default Crypto