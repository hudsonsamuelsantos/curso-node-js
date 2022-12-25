const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const user = {
        name: 'Hudson',
        surname: 'Santos',
        age: 30
    }

    const word = 'Teste'

    res.render('home', { user, word })
})

app.listen(3000, () => {
    console.log('Rodando na porta 3000!')
})