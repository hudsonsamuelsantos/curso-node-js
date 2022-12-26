const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const products = [
    {
        id: 0,
        name: 'Cadeira',
        price: '500,99'
    },
    {
        id: 1,
        name: 'Mesa',
        price: '400,99'
    },
    {
        id: 2,
        name: 'Fone de ouvido',
        price: '120,99'
    }
]

app.get('/products/:id', (req, res) => {
    const id = req.params.id

    const product = products[id]

    res.render('product', { product })
})

app.get('/', (req, res) => {
    res.render('home', { products })
})

app.listen(3000, () => {
    console.log('Rodando na porta 3000!')
})