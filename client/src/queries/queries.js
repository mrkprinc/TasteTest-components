import gql from 'graphql-tag';

export const createRecipeQuery = gql`
  mutation CreateRecipe($name: String, $description: String) {
    createRecipe(input: {name: $name, description: $description}) {
      id
      name
      description
    }
  }
`

export const recipeListQuery = gql`
  {
    getAllRecipes(limit: 4) {
      id
      name
      description
    }
  }
`