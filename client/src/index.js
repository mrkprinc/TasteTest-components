import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Logo from './components/Logo';
import Module from './components/Module';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Logo />, document.getElementById('logo'));
ReactDOM.render(<Module />, document.getElementById('modules'));
