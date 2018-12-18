const db = require('../../models');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
  getAll: optionalLimit => {
    return new Promise((resolve, reject) => {
      let query = db.Recipe
        .find({ active: true })
        .sort({createdAt: -1})
      if(optionalLimit) query.limit(optionalLimit);
      query.exec((err, results) => {
        if(err) reject(err.message);
        resolve(results);
      })
    })
  },
  getOne: recipeId => {
    return new Promise((resolve, reject) => {
      db.Recipe.findById(new ObjectId(recipeId), (err, result) => {
        if(err) reject(err.message);
        resolve(result);
      })
    })
  },
  createNew: ({ name, description }) => {
    return new Promise((resolve, reject) => {
      db.Recipe.create({ name, description }, (err, newRecipe) => {
        if(err) reject(err.message);
        resolve(newRecipe);
      })
    })
  }
}