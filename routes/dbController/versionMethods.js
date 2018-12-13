const db = require('../../models');
const { DatabaseError } = require('../../errors');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
  getAllByRecipe: recipeId => {
    return new Promise((resolve, reject) => {
      db.Version
        .find({ recipe: new ObjectId(recipeId) }, (err, results) => {
          if(err) reject(err.message);
          resolve(results);
        })
    })
  },
  getOne: recipeId => {
    return new Promise((resolve, reject) => {
      db.Version
        .findOne({ recipe: new ObjectId(recipeId) }, (err, result) => {
          if(err) reject(err.message);
          resolve(result);
        })
    })
  },
  createNew: ({ ingredients, instructions, recipeId }) => {
    return new Promise((resolve, reject) => {
      db.Version.create({ ingredients, instructions, recipe: new ObjectId(recipeId) }, (err, newVersion) => {
        if(err) reject(err.message);
        resolve(newVersion);
      })
    })
  }
}