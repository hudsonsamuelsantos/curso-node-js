const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const baseUrl = path.join(__dirname, 'templates')

// ler o body

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/users/add', (req, res) => {
    res.sendFile(`${baseUrl}/users-add.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos!`)

    res.sendFile(`${baseUrl}/users-add.html`)
})

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