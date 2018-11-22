const db = require('../../models');
const { DatabaseError } = require('../../errors');

module.exports = {
  getAllByRecipe: recipeId => {
    return new Promise((resolve, reject) => {
      db.Recipe
        .findById(recipeId)
        .populate('variations')
        .exec((err, results) => {
          if(err) reject(err.message);
          resolve(results.variations);
        })
    })
  },
  createNew: (dataObj, recipeId) => {
    return new Promise((resolve, reject) => {
      db.Variation.create(dataObj, (err, newVariation) => {
        if(err) reject(err.message);
        db.Recipe.findByIdAndUpdate(
          recipeId, 
          { $push: { variations: newVariation._id }}, 
          err => {
            if(err) reject(err.message);
            resolve(newVariation);
          })
      })
    })
  }
}