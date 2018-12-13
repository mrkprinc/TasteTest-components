const db = require('../dbController');

module.exports = {
  Recipe: {
    versions: recipe => {
      return db.version.getAllByRecipe(recipe.id);
    }
  },
  Query: {
    getAllRecipes: () => {
      return db.recipe.getAll()
    },
    getOneRecipe: () => {
      return db.recipe.getOne()
    }
  },
  Mutation: {
    createRecipe: (_, { input }) => {
      return db.recipe.createNew(input)
    },
    createVersion: (_, { input }) => {
      return db.version.createNew(input);
    }
  }
}