import gql from 'graphql-tag';
import QueryContainer from './QueryContainer';
import DisplayRecipe from '../components/DisplayRecipe/DisplayRecipe';


const DisplayRecipeContainer = props => {
  const query = gql`
    {
      getOneRecipe(id: "${props.id}") {
        id
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