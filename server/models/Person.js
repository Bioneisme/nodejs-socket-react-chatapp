const {STRING} = require('sequelize');
const db = require('../config/database');

const Person = db.define('person', {
    name: {type: STRING},
    surname: {type: STRING},
    email: {type: STRING},
    password: {type: STRING}
});

module.exports = Person;