const { gql } = require('apollo-server-express');
const resolvers = require('./resolvers');

module.exports = {
  resolvers,
  schema: gql`
    type Recipe {
      id: String
      name: String
      description: String
      versions: [Version]
      variables: [Variable]
      score: Float
    }
    type Version {
      id: String
      ingredients: [String]
      instructions: [String]
    }
    type Variable {
      name: String
      value: Float
      unit: String
    }

    input RecipeInput {
      name: String,
      description: String
    }

    type Query {
      getAllRecipes: [Recipe!]
      getOneRecipe: Recipe!
    }

    type Mutation {
      createRecipe(input: RecipeInput): Recipe
    }
  `
}