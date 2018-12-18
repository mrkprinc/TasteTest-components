import gql from 'graphql-tag';
import QueryContainer from './QueryContainer';
import RecipeListItems from '../components/ListRecipes/RecipeListItems';


const RecipeListItemsContainer = props => {
  const query = 
    props.limit ?
    gql`
      {
        getAllRecipes(limit: ${props.limit}) {
          id
          name
          description
        }
      }
    ` :
    gql`
      {
        getAllRecipes {
          id
          name
          description
        }
      }
    `

  return (
    QueryContainer(query, RecipeListItems, { selectRecipe: props.selectRecipe })
  )
}

export default RecipeListItemsContainer;