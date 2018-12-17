const db = require('../dbController');

module.exports = {
  Recipe: {
    topVersion: recipe => {
      return db.version.getOne(recipe.id)
    },
    moreVersions: recipe => {
      return db.version.getMore(recipe.id)
    }
  },
  Query: {
    getAllRecipes: () => {
      return db.recipe.getAll()
    },
    getOneRecipe: (_, { id }) => {
      return db.recipe.getOne(id);
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