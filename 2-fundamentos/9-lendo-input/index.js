const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual é sua  linguagem favorita?', language => {
    if (language === 'Javascript') {
        console.log('Faz sentido!')
    } else {
        console.log(`A minha linguague preferida é: ${language}`)
    }

    readline.close()
})