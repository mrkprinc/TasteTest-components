import React from 'react';
import styles from '../assets/css/blockComponents.module.css';
import { ListBuilder, types } from './ListBuilder';

const CreateRecipeForm = props => {
  return (
    <div className={styles.container}>
      <header>
        Start a New Recipe
      </header>
      
      <form>
        <input type='text' placeholder='Recipe Name' />
        <textarea placeholder='Description' />
      </form>

      <h1>Ingredients</h1>
      <ListBuilder type={types.ingredients} />

      <h1>Instructions</h1>
      <ListBuilder type={types.instructions} />
    </div>
  )
}

export default CreateRecipeForm;