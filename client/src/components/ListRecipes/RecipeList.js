import React from 'react';
import RecipeListItemsContainer from '../../containers/RecipeListItemsContainer';
import DisplayRecipeContainer from '../../containers/DisplayRecipeContainer';
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

    return (
      <div>
        <div className={styles.container}>
          <header>Select a recipe: </header>
          <ul>
            <RecipeListItemsContainer 
              selectRecipe={id => this.selectRecipe(id)} 
              limit={this.props.limit} 
            />
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

