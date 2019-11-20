const { Activities } = require(`../models`)

module.exports = app => {

  // Get all activities
  app.get(`/activities`, (req, res) => {
    Activities.findAll()
      .then(activities => res.json(activities))
      .catch(e => console.log(e))
  })
  // Get an activity
  app.get(`/activities/:id`, (req, res) => {
    Activities.findOne({ where: { id: req.params.id } })
      .then(activity => res.json(activity))
      .catch(e => console.log(e))
  })
  // Add an activity
  app.post(`/activities`, (req, res) => {
    Activities.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  // Update an activity
  app.put(`/activities/:id`, (req, res) => {
    Activities.findOne({ where: { id: req.params.id } })
      .then(activity => activity.update(req.body))
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  // Delete an activity
  app.delete(`/activities/:id`, (req, res) => {
    Activities.findOne({ where: { id: req.params.id } })
      .then(activity => activity.destroy())
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}