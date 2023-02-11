const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('sql9597361', 'sql9597361', 'NXdKVrPEji', {
    host: 'sql9.freesqldatabase.com',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()

    console.log('Conectado ao MySQL!')
} catch (error) {
    console.log(`Não foi possível conectar, ${error}`)
}

module.exports = sequelize