const path = require('path')
const express = require('express')
const router = express.Router()

const baseUrl = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${baseUrl}/users-add.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos!`)

    res.sendFile(`${baseUrl}/users-add.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    res.sendFile(`${baseUrl}/users.html`)

    console.log(`Estamos buscando o usuário de id: ${id}`)
})

module.exports = router