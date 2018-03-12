import React from 'react'
import {connect} from 'react-redux'
import {Table} from 'semantic-ui-react';

class CryptoList extends React.Component {
    render() {
        return (
            <div className="ui pagination">
                <Table className="ui single line table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Market cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this
                            .props
                            .cryptos
                            .map(c => <tr key={c.id}>
                                <td>{c.name}</td>
                                <td>{c.symbol}</td>
                                <td>{c.mcap}</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const cryptos = state.cryptos
    return {cryptos}
}

const ConnectedCryptoList = connect(mapStateToProps)(CryptoList)

export default ConnectedCryptoList