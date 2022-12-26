const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const items = ['Item a', 'Item b', 'Item c']

    res.render('dashboard', { items })
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender Node!',
        comments: 4
    }

    res.render('blogpost', { post })
})

app.get('/', (req, res) => {
    const user = {
        name: 'Hudson',
        surname: 'Santos',
        age: 30
    }

    const word = 'Teste'

    const approved = false

    const auth = true

    res.render('home', { user, word, auth, approved })
})

app.listen(3000, () => {
    console.log('Rodando na porta 3000!')
})