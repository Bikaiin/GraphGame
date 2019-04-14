const Sequelize = require('sequelize');
const db = require('../config/database');

const Player = db.define('player', {
    firstName: {
        type: Sequelize.STRING,

    },
    eMail: {
        type: Sequelize.STRING

    }},{
    timestamps: false
});
module.exports = Player;