import React from 'react';
import { context, fields } from './context';
import { ListBuilder, VariableListBuilder } from '.';
import { block } from '../../assets/css/DisplayRecipe.module.css';

const CreateRecipeListsInput = props => {
  return (
    <context.Consumer>
      {context => {
        return (
          <div className={block}>
            <h1>Ingredients</h1>
            <VariableListBuilder field={fields.ingredients} context={context} />

            <h1>Instructions</h1>
            <ListBuilder field={fields.instructions} context={context} />
          </div>
        )
      }}
    </context.Consumer>
  )
}

export default CreateRecipeListsInput;