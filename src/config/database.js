require('dotenv').config

module.exports = {
    host: process.env.DB_HOST,
    username: 'user_tem_acucar',
    password: 'cego#12@9',
    database: 'tem_acucar',
    dialect: 'mysql',
    define: {
        timestamps: true,
        underscored: true
    }
}