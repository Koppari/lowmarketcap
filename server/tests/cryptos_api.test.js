const supertest = require('supertest')
const {app, server} = require('../index')
const api = supertest(app)

test('API for fetching crypto info works and returns json', async() => {
    const res = await api
        .get('api/cryptos')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

afterAll(() => {
    server.close()
})