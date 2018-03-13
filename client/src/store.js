import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import cryptoReducer from './reducers/cryptoReducer'

const reducer = combineReducers({cryptos: cryptoReducer})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
