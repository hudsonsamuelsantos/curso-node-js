const _ = require('lodash')
const chalk = require('chalk')

const a = [1, 3, 5, 9, 2]
const b = [1, 5, 7, 3, 2]

const diff = _.difference(a, b)

console.log(chalk.bgRed(diff))