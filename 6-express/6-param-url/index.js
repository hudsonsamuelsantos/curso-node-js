const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const baseUrl = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    res.sendFile(`${baseUrl}/users.html`)

    console.log(`Estamos buscando o usuário de id: ${id}`)
})

app.get('/', (req, res) => {
    res.sendFile(`${baseUrl}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}!`)
})