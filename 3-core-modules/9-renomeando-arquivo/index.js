const fs = require('fs')

const arqAntigo = 'arquivo.txt'
const arqNovo = 'novoArquivo.txt'

fs.rename(arqAntigo, arqNovo, err => {
    if (err) {
        console.log(err)
        return
    }

    console.log(`O arquivo ${arqAntigo} foi ${arqNovo}`)
})