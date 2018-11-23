import React from 'react';
import Logo from './Logo';
import DisplayRecipe from './DisplayRecipe';
import CreateRecipeForm from './CreateRecipeForm';
import '../assets/css/reset.css';
import '../assets/css/App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className='mainHeader'>This is Taste-Test.</header>
        <main>
          <Logo />     
          <DisplayRecipe />
          <CreateRecipeForm/>
        </main>
      </div>
    );
  }
}

export default App;
