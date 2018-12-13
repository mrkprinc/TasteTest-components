import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import DisplayRecipe from '../components/DisplayRecipe';
import Loading from '../components/Loading';

const DisplayRecipeContainer = () => {
  const query = gql`
    {
      getOneRecipe {
        name
        description
        topVersion {
          ingredients
          instructions
        }
      }
    }
  `

  return (
    <Query query={query}>
      {({loading, error, data}) => {
        if(loading) {
          return <Loading />;
        } else if(error) {
          console.log(error);
          return <div style={{textAlign: 'center'}}>There was an error!</div>
        } else {
          return <DisplayRecipe {...data.getOneRecipe} />
        }
      }}
    </Query>
  )
}

export default DisplayRecipeContainer