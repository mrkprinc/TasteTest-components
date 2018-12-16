import React from 'react';
import { Query } from 'react-apollo';
import Loading from '../components/Loading';

const QueryContainer = (query, ChildComponent) => {
  return (
    <Query query={query}>
      {({loading, error, data}) => {
        if(loading) {
          return <Loading />;
        } else if(error) {
          console.log(error);
          return <div style={{textAlign: 'center'}}>There was an error!</div>
        } else {
          return <ChildComponent {...data} />
        }
      }}
    </Query>
  )
}

export default QueryContainer