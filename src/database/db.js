import { Sequelize } from 'sequelize'
import 'dotenv/config'

const db = new Sequelize(process.env.NOME_BANCO, process.env.NOME_USER, process.env.SENHA_BANCO, {
    host: 'localhost',
    dialect: process.env.BANCO
})

export default db