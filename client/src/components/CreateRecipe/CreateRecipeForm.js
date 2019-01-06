import React from 'react';
import styles from '../../assets/css/DisplayRecipe.module.css';
import { ListBuilder, VariableInput } from '.';
import { context, NewRecipeContext, fields } from './context';

const CreateRecipeForm = props => {
  return (
    <NewRecipeContext>
      <context.Consumer>
        {context => {
          return (
            <div className={styles.container}>
              <header>
                Start a New Recipe
              </header>

              <form>
                <input 
                  type='text' placeholder='Recipe Name' 
                  value={context.name}
                  onChange={e => context.update(fields.name, e.target.value)}
                />
    
                <textarea 
                  placeholder='Description' 
                  value={context.description}
                  onChange={e => context.update(fields.description, e.target.value)}
                />
              </form>

              <h1>Ingredients</h1>
              <ListBuilder field={fields.ingredients} context={context} />

              <h1>Instructions</h1>
              <ListBuilder field={fields.instructions} context={context} />
              <VariableInput />
            </div>
          )
        }}
      </context.Consumer>
    </NewRecipeContext>
  )
}

export default CreateRecipeForm;