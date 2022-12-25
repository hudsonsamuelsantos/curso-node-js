const express = require('express')
const path = require('path')

const app = express()
const port = 5000
const router = require('./routes')

app.use(express.static('public'))

app.use('/', router)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})