const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'hudson2', 'Abc123456.', {
    host: 'localhost',
    dialect: 'mysql'
})

// try {
//     sequelize.authenticate()
//     console.log('Conexão com Sequelize realizada com sucesso!')
// } catch (error) {
//     console.log('Não foi possível conectar ao Sequelize!', error)
// }

module.exports = sequelize