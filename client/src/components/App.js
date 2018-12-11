import React from 'react';
import Logo from './Logo';
import DisplayRecipe from './DisplayRecipe';
import CreateRecipeForm from './CreateRecipeForm';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import '../assets/css/reset.css';
import '../assets/css/App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <header className='mainHeader'>This is Taste-Test.</header>
        <main>
          <Query query={gql`
            {
              hello
            }
          `}>
            {({loading, error, data}) => {
              if(loading) {
                return <div style={{textAlign: 'center'}}>Loading data...</div>;
              } else if(error) {
                console.log(error);
              } else {
                return <div style={{textAlign: 'center'}}>{data.hello}</div>
              }
            }}
          </Query>

          <Logo />     
          <DisplayRecipe />
          <CreateRecipeForm/>
        </main>
      </div>
    );
  }
}

export default App;
