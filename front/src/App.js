import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';

import CryptoList from './components/CryptoList'

import {connect} from 'react-redux'
import {cryptoInitialization} from './reducers/cryptoReducer'
import cryptoService from './services/cryptoService'

class App extends Component {
  componentDidMount = async() => {
    this
      .props
      .cryptoInitialization()
  }

  render() {
    return (
      <Container>
        <div>
          <h1>LowMarketCap</h1>
          <CryptoList/>
        </div>
      </Container>
    );
  }
}

export default connect(null, {cryptoInitialization})(App)
