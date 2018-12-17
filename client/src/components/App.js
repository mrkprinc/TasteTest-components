import React from 'react';
import Logo from './Logo';
import RecipeList from './ListRecipes/RecipeList';
import '../assets/css/reset.css';
import '../assets/css/App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <header className='mainHeader'>This is Taste-Test.</header>
        <main>
          <Logo /> 
          <RecipeList />    
        </main>
      </div>
    );
  }
}

export default App;
