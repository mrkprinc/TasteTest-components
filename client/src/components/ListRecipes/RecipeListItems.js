import React from 'react';
import styles from '../../assets/css/DisplayRecipe.module.css';

const RecipeListItems = props => {
  const list = props.getAllRecipes.slice(0, 4);

  return list.length > 0 ?
    list.map((recipe, i) => {
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
    }) :
    <div style={{textAlign: 'center'}}>There are no recipes to display.</div>
}

export default RecipeListItems;