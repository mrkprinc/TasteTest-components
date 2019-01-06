import React from 'react';
import styles from '../../assets/css/DisplayRecipe.module.css';
import { ListBuilder, types, VariableInput } from '.';

class CreateRecipeForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: ''
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <header>
          Start a New Recipe
        </header>
  
        <form>
          <input 
            type='text' placeholder='Recipe Name' 
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
  
          <textarea 
            placeholder='Description' 
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
          />
        </form>
  
  
        <h1>Ingredients</h1>
        <ListBuilder type={types.ingredients} />
  
        <h1>Instructions</h1>
        <ListBuilder type={types.instructions} />
        <VariableInput />
  
      </div>
    )
  }
}

export default CreateRecipeForm;