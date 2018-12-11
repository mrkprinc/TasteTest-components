const db = require('../dbController');

module.exports = {
  Query: {
    getAllRecipes: () => {
      return db.recipe.getAll()
    },
    getOneRecipe: () => {
      return db.recipe.getOne()
    }
  },
  Mutation: {
    createRecipe: ({ input }) => {
      return db.recipe.createNew(input)
    }
  }
}