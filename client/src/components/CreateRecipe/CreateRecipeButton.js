import React from 'react';
import { context } from './context';

const CreateRecipeButton = props => {
  return (
    <context.Consumer>
      {context => {
        return (
          <button>Create Recipe</button>
        )
      }}
    </context.Consumer>
  )
}

export default CreateRecipeButton;