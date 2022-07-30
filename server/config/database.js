const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

module.exports = new Sequelize(process.env.DATABASE_URL, {
    host: 'postgres',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});