import React from 'react'
import {Link} from 'react-router-dom'
import {Table} from 'semantic-ui-react';

const CryptoList = ({cryptos}) => {
    return (
        <Table className="ui fixed single line table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Market cap</th>
                </tr>
            </thead>
            <tbody>
                {cryptos.map(c => <tr key={c.rId}>
                    <td>
                        <Link to={`/cryptos/${c.id}`}>{c.name}</Link>
                    </td>
                    <td>{c.symbol}</td>
                    <td>{c.mcap}</td>
                </tr>)}
            </tbody>
        </Table>
    )
}

export default CryptoList