const Sequelize = require('sequelize')

module.exports = new Sequelize('mysql://root:groot@localhost/activities_db')