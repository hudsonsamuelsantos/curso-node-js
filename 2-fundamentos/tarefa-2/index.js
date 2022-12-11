const inquirer = require('inquirer')

const chalk = require('chalk')

inquirer.prompt([{
    name: 'nome',
    message: 'Qual é o seu nome?'
},
{
    name: 'idade',
    message: 'Qual é a sua idade?'
}])
    .then(answers => {
        if (!answers.nome || !answers.idade) {
            throw new Error('Preencha todos os campos!')
        } else {
            console.log(chalk.bgYellow.black(`O seu nome é ${answers.nome} e você tem ${answers.idade} anos`))
        }
    })
    .catch(err => {
        console.log(err)
    })