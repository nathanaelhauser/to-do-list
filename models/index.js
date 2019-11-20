const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

module.exports = {
  Activities: require('./Activities')(Model, DataTypes, sequelize)
}