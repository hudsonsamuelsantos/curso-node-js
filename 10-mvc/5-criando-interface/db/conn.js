const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc2', 'hudson2', 'Abc123456.', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()

    console.log('Conectado ao MySQL!')
} catch (error) {
    console.log(`Não foi possível conectar, ${error}`)
}

module.exports = sequelize