import React from 'react';
import Logo from './Logo';
import Module from './Module';
import CollapsibleModule from './CollapsibleModule';
import '../assets/css/reset.css';
import '../assets/css/App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>This is Taste-Test.</header>
        <main>
          <Logo />
          <CollapsibleModule heading='Test Module'>
            This is a test module.
          </CollapsibleModule>
          <Module />
        </main>
      </div>
    );
  }
}

export default App;
