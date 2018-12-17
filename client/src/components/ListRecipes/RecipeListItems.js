import React from 'react';
import styles from '../../assets/css/DisplayRecipe.module.css';

const RecipeListItems = props => {
  const list = props.getAllRecipes;

  return list.map((recipe, i) => {
    return (
      <li 
        key={i} 
        className={styles.recipeListItem}
        onClick={() => props.selectRecipe(recipe.id)}
      >
        <strong>{recipe.name}</strong> 
        <div className={styles.description}>{recipe.description}</div>
      </li>
    )
  })
}

export default RecipeListItems;