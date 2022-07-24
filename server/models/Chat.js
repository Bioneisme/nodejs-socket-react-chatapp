const {ARRAY, STRING} = require('sequelize');
const db = require('../config/database');

const Chat = db.define('chat', {
    users: {type: ARRAY(STRING)}
});

module.exports = Chat;