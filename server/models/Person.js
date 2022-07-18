const {STRING} = require('sequelize');
const db = require('../config/database');

const Person = db.define('person', {
    nickname: {type: STRING},
    email: {type: STRING},
    password: {type: STRING}
});

module.exports = Person;