import cryptoService from '../services/cryptoService'

const cryptoReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_CRYPTOS':
            return action.cryptos
        default:
            return [...state]
    }
}

export const cryptoInitialization = () => {
    return async(dispatch) => {
        const cryptos = await cryptoService.getAll()
        dispatch({type: 'INIT_CRYPTOS', cryptos: cryptos})
    }
}

export default cryptoReducer