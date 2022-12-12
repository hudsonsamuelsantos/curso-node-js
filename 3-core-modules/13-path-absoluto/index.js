const path = require('path')

console.log(path.resolve('teste.txt'))

const midFolder = 'realatorios'
const fileName = 'hudson.pdf'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)