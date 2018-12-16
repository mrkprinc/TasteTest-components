const db = require('../../models');
const { DatabaseError } = require('../../errors');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
  getOne: recipeId => {
    return new Promise((resolve, reject) => {
      db.Version
        .find({ recipe: new ObjectId(recipeId) })
        .sort({ createdAt: -1 })
        .limit(1)
        .exec((err, results) => {
          if(err) reject(err.message);
          resolve(results[0]);
        })
    })
  },
  getMore: recipeId => {
    return new Promise((resolve, reject) => {
      db.Version
        .find({ recipe: new ObjectId(recipeId) })
        .sort({ createdAt: -1 })
        .skip(1)
        .limit(20)
        .exec((err, results) => {
          if(err) reject(err.message);
          resolve({
            count: results.length,
            versions: results
          });
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