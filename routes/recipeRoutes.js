const router = require('express').Router();
const dbMethods = require('./controller'); 
const { DatabaseError } = require('../errors');

router.get('/', (req, res) => {
  dbMethods.recipe.getAll()
    .catch(err => {
      res.json(new DatabaseError(err))
    })
    .then(response => {
      res.json(response);
    })
})

router.post('/', (req, res) => {
  dbMethods.recipe.createNew(req.body)
    .catch(err => {
      res.json(new DatabaseError(err))
    })
    .then(response => {
      res.json(response);
    })
})

module.exports = router;