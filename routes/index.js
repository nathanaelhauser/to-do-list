module.exports = app => {
  require('./activitiesRoutes')(app)
  require('./htmlRoutes')
}