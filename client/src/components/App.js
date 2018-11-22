import React from 'react';
import Logo from './Logo';
import DisplayRecipe from './DisplayRecipe';
import '../assets/css/reset.css';
import '../assets/css/App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>This is Taste-Test.</header>
        <main>
          <Logo />     
          <DisplayRecipe />
        </main>
      </div>
    );
  }
}

export default App;
