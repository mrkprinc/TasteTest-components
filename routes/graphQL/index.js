const { gql } = require('apollo-server-express');
const resolvers = require('./resolvers');

module.exports = {
  resolvers,
  schema: gql`
    type Recipe {
      id: String
      name: String
      description: String
      topVersion: Version
      moreVersions: MoreVersions
    }
    type MoreVersions {
      count: Int
      versions: [Version]
    }
    type Version {
      id: String
      ingredients: [String]
      instructions: [String]
    }

    input RecipeInput {
      name: String,
      description: String
    }
    input VersionInput {
      ingredients: [String],
      instructions: [String],
      recipeId: String
    }

    type Query {
      getAllRecipes: [Recipe!]
      getOneRecipe: Recipe!
    }

    type Mutation {
      createRecipe(input: RecipeInput): Recipe
      createVersion(input: VersionInput): Version
    }
  `
}