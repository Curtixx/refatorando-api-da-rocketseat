import { Sequelize } from 'sequelize'
import db from '../database/db.js'


const Video = db.define('Video', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Video
