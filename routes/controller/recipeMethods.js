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
  createNew: dataObj => {
    return new Promise((resolve, reject) => {
      db.Recipe.create(dataObj, (err, newRecipe) => {
        if(err) reject(err.message);
        resolve(newRecipe);
      })
    })
  }
}