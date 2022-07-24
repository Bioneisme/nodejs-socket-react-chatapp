const {STRING, INTEGER, DATE} = require('sequelize');
const moment = require('moment-timezone');
const db = require('../config/database');

const Message = db.define('message', {
    id: {type: INTEGER, autoIncrement: true, primaryKey: true},
    createdAt: {type: DATE, get() {
            return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
        }},
    updatedAt: {type: DATE, get() {
            return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
        }},
    chatId: {type: STRING},
    senderId: {type: STRING},
    text: {type: STRING}
})

module.exports = Message;