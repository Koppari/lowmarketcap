const morgan = require('morgan')

const error = (request, response) => {
    response
        .status(404)
        .send({error: '404'})
}

module.exports = {
    morgan,
    error
}