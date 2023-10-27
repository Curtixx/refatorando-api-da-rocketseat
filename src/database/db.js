import { Sequelize } from 'sequelize'

const db = new Sequelize('postgres', 'postgres', 'FreeFire10', {
    host: 'localhost',
    dialect: 'postgres'
})

export default db