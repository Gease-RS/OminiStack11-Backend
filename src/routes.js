const express = require('express')

const route = express.Router()

app.get('/users', (request, response) => {
    const body = request.body

    console.log(body)
    
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Gease Oliveira"
    })
})