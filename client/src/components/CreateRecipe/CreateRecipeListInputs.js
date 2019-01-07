import React from 'react';
import { context, fields } from './context';
import { ListBuilder, VariableInput } from '.';

const CreateRecipeListsInput = props => {
  return (
    <context.Consumer>
      {context => {
        return (
          <form>
            <h1>Ingredients</h1>
            <ListBuilder field={fields.ingredients} context={context} />

            <h1>Instructions</h1>
            <ListBuilder field={fields.instructions} context={context} />
            <VariableInput />
          </form>
        )
      }}
    </context.Consumer>
  )
}

export default CreateRecipeListsInput;