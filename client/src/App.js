import React, {Component} from 'react'
import {Container} from 'semantic-ui-react'
import {HashRouter} from 'react-router-dom'

import CryptoRouter from './components/CryptoRouter'
import Menu from './components/Menu'

import {connect} from 'react-redux'
import {cryptoInitialization} from './reducers/cryptoReducer'
import cryptoService from './services/cryptoService'

class App extends Component {
  componentDidMount = () => {
    this
      .props
      .cryptoInitialization()
  }

  render() {
    return (
      <Container>
        <HashRouter>
          <div>
            <Menu/>
            <CryptoRouter/>
          </div>
        </HashRouter>
      </Container>
    );
  }
}

export default connect(null, {cryptoInitialization})(App)
