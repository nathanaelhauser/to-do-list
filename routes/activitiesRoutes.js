const { Activities } = require('../models')

module.exports = app => {

  // Get all activities
  app.get('/activities', (req, res) => {
    Activities.findAll()
      .then(activities => res.json(activities))
      .catch(e => console.log(e))
  })

  // Get an activity

  // Add an activity

  // Update an activity

  // Delete an activity

}