import React from 'react';
import styles from '../../assets/css/DisplayRecipe.module.css';
import { CreateRecipeListInputs, CreateRecipeTextInputs, CreateRecipeButton } from '.';
import { NewRecipeContext } from './context';

const CreateRecipeForm = props => {
  return (
    <NewRecipeContext>
      <div className={styles.container}>
        <header>
          Start a New Recipe
        </header>

        <CreateRecipeTextInputs />
        
        <CreateRecipeListInputs />

        <CreateRecipeButton />
      </div>
    </NewRecipeContext>
  )
}

export default CreateRecipeForm;