import React from 'react'
import {Link} from 'react-router-dom'

const CryptoList = ({cryptos}) => {
    return (
        <table className="ui fixed single line table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Market cap</th>
                    <th>Price</th>
                    <th>Change (24h)</th>
                </tr>
            </thead>
            <tbody>
                {cryptos.map(c => <tr key={c.id}>
                    <td>
                        <Link to={`/cryptos/${c.id}`}>{c.name}</Link>{' '}<small>{c.symbol}</small>
                    </td>
                    <td>${c.mcap}</td>
                    <td>${c.price_usd}</td>
                    <td>{c.change}%</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default CryptoList