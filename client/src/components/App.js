import React from 'react';
import Logo from './Logo';
import Module from './Module';
import '../assets/css/reset.css';
import '../assets/css/App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <header>This is Taste-Test.</header>
        <Logo />
        <Module />
      </div>
    );
  }
}

export default App;
