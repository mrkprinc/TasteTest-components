import React from 'react';
import { context } from './context';

const CreateRecipeButton = props => {
  return (
    <context.Consumer>
      {context => {
        return (
          <button onClick={e => {
            props.onClick(context);
            context.clear();
          }}>
            Create Recipe
          </button>
        )
      }}
    </context.Consumer>
  )
}

export default CreateRecipeButton;