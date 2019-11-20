module.exports = (Model, DataTypes, sequelize) => {

  class Activies extends Model {}

  Activies.init({
    name: DataTypes.STRING,
    finished: DataTypes.BOOLEAN
  }, { sequelize, modelName: 'activity'})

  return Activies
}