import React from 'react';
import Logo from './Logo';
import RecipeList from './ListRecipes/RecipeList';
import CreateRecipeForm from './CreateRecipe/CreateRecipeForm';
import ParseRecipe from './CreateRecipe/ParseRecipe';
import '../assets/css/reset.css';
import '../assets/css/App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <header className='mainHeader'>This is Taste-Test.</header>
        <main>
          <Logo /> 
          <RecipeList limit={3} />
          <CreateRecipeForm />
          <ParseRecipe />
        </main>
      </div>
    );
  }
}

export default App;
