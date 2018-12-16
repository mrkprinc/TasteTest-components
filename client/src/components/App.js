import React from 'react';
import Logo from './Logo';
import DisplayRecipeContainer from '../containers/DisplayRecipeContainer';
import '../assets/css/reset.css';
import '../assets/css/App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <header className='mainHeader'>This is Taste-Test.</header>
        <main>
          <Logo />     
          <DisplayRecipeContainer />
        </main>
      </div>
    );
  }
}

export default App;
