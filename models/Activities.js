module.exports = (Model, DataTypes, sequelize) => {

  class Activies extends Model {}

  Activies.init({
    thing: DataTypes.STRING,
    finished: DataTypes.BOOLEAN
  }, { sequelize, modelName: 'activity'})

  return Activies
}