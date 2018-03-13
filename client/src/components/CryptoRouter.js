import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import Crypto from './Crypto'
import CryptoList from './CryptoList'

class CryptoRouter extends React.Component {
    cryptoById = (id) => {
        return this
            .props
            .cryptos
            .find(c => c.id === id)
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route
                        exact
                        path='/'
                        render={() => <CryptoList cryptos={this.props.cryptos}/>}/>
                    <Route
                        exact
                        path='/cryptos/:id'
                        render={({match}) => <Crypto crypto={this.cryptoById(match.params.id)}/>}/>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    const cryptos = state.cryptos
    return {cryptos}
}

const ConnectedCryptoRouter = connect(mapStateToProps)(CryptoRouter)

export default ConnectedCryptoRouter