import React from 'react'
import {Link} from 'react-router-dom'
import NumberFormat from 'react-number-format'

const CryptoList = ({cryptos}) => {
    if (crypto == null) 
    return (
        <div className="ui large active loader"></div>
    )

    return (
        <table className="ui fixed sortable single line table">
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
                    <td><NumberFormat value={c.mcap === null ? 'Unknown' : c.mcap} displayType={'text'} thousandSeparator={true} prefix={'$'}/></td>
                    <td><NumberFormat value={c.price_usd === null ? 'Unknown' : c.price_usd} displayType={'text'} thousandSeparator={true} prefix={'$'}/></td>
                    <td>{c.change}%</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default CryptoList