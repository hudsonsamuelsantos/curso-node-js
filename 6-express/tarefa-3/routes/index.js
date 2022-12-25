const path = require('path')
const express = require('express')

const router = express.Router()

const baseUrl = path.join(__dirname, '../templates')

router.get('/contact', (req, res) => {
    res.sendFile(`${baseUrl}/contact.html`)
})

router.get('/', (req, res) => {
    res.sendFile(`${baseUrl}/index.html`)
})

module.exports = router