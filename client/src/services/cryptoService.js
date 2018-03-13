import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/cryptos'

const getAll = async() => {
  const request = await axios.get(baseUrl)
  return request.data
}

const get = async(id) => {
  const request = await axios.get(`${baseUrl}/${id}`)
  return request.data
}

export default {
  getAll,
  get
}