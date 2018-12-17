import React from 'react';
import QueryContainer from '../../containers/QueryContainer';
import RecipeListItems from './RecipeListItems';
import DisplayRecipeContainer from '../../containers/DisplayRecipeContainer';
import gql from 'graphql-tag';
import styles from '../../assets/css/blockComponents.module.css';

class RecipeList extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedRecipe: null
    }
  }

  selectRecipe(id) {
    this.setState({ selectedRecipe: id });
  }

  render() {
    const query = gql`
      {
        getAllRecipes {
          id
          name
          description
        }
      }
    `

    return (
      <div>
        <div className={styles.container}>
          <header>Select a recipe: </header>
          <ul>
            {QueryContainer(query, RecipeListItems, { selectRecipe: id => this.selectRecipe(id) })}
          </ul>
        </div>

        {this.state.selectedRecipe && (
          <DisplayRecipeContainer id={this.state.selectedRecipe} /> 
        )}
      </div>
    )
  }
}

export default RecipeList;

