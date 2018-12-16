import gql from 'graphql-tag';
import QueryContainer from './QueryContainer';
import DisplayRecipe from '../components/DisplayRecipe/DisplayRecipe';


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
        moreVersions {
          count
        }
      }
    }
  `

  return (
    QueryContainer(query, DisplayRecipe)
  )
}

export default DisplayRecipeContainer;