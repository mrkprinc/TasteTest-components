import React from 'react';
import { Mutation } from 'react-apollo';
import CreateRecipeButton from '../components/CreateRecipe/CreateRecipeButton.js';
import Loading from '../components/Loading';
import { createRecipeQuery, recipeListQuery } from '../queries/queries';

const CreateRecipeButtonContainer = () => {
  return (
    <Mutation 
      mutation={createRecipeQuery}
      update={(cache, { data: { createRecipe }}) => {
        const { getAllRecipes } = cache.readQuery({ query: recipeListQuery });
        cache.writeQuery({
          query: recipeListQuery,
          data: { getAllRecipes: [createRecipe, ...getAllRecipes]}
        })
      }}
    >
      {(createRecipe, response) => {
        return (
          <div>
            <CreateRecipeButton onClick={context => {
              createRecipe({ variables: {
                name: context.name,
                description: context.description
              }}
              )
            }} />

            {response.loading && <Loading text='Saving Recipe...' />}
          </div>
        )
      }}
    </Mutation>
  )
}

export default CreateRecipeButtonContainer;