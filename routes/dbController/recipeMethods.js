const db = require('../../models');

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.Recipe.find({ active: true }, (err, results) => {
        if(err) reject(err.message);
        resolve(results);
      })
    })
  },
  getOne: () => {
    return new Promise((resolve, reject) => {
      db.Recipe.findOne({ active: true }, (err, result) => {
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