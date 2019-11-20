module.exports = (Model, DataTypes, sequelize) => {

  class Activies extends Model {}

  Activies.init({
    thing: DataTypes.STRING,
    finished: { type: DataTypes.BOOLEAN, defaultValue: '0' }
  }, { sequelize, modelName: 'activity'})

  return Activies
}