import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

// =================================================================================================================
// class Module extends Component {
//   render() {
//     return (
//       <div>This is a module.</div>
//     );
//   }
// }

// =================================================================================================================
class Module extends Component {
  render() {
    return (
      <div>
      <Collapsible trigger="Spaghetti and Meatballs">
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>
      <Collapsible trigger="Ingredient List">
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>
      <Collapsible trigger="Instructions">
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>
      <Collapsible trigger="Discussiongit co">
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>
      </div>
    );
  }
}

export default Module;

// =================================================================================================================
// https://www.npmjs.com/package/react-collapsible

// import React from 'react';
// import Collapsible from 'react-collapsible';

// var App = React.createClass({

//   render: function() {
//     return(

//       <Collapsible trigger="Start here">
//         <p>This is the collapsible content. It can be any element or React component you like.</p>
//         <p>It can even be another Collapsible component. Check out the next section!</p>
//       </Collapsible>

//     );
//   }

// });

// export default App;