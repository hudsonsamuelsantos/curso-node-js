const chalk = require('chalk')

const nota = 5

if (nota >= 7) {
    console.log(chalk.green('Você está aprovado!'))
} else {
    console.log(chalk.bgRed('Você está de recuperação!'))
}