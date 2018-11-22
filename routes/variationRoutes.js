const router = require('express').Router();
const dbMethods = require('./controller');
const { DatabaseError } = require('../errors');

router.get('/:recipeid', (req, res) => {
  dbMethods.variation.getAllByRecipe(req.params.recipeid)
    .catch(err => {
      res.json(new DatabaseError(err))
    })
    .then(response => {
      res.json(response);
    })
})

router.post('/', (req, res) => {
  dbMethods.variation.createNew(req.body, req.body.recipeId)
    .catch(err => {
      res.json(new DatabaseError(err))
    })
    .then(response => {
      res.json(response);
    })
})

module.exports = router;