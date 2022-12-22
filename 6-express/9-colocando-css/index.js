const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const users = require('./users')

const baseUrl = path.join(__dirname, 'templates')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${baseUrl}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}!`)
})