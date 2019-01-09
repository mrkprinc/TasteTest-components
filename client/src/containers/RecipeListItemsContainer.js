import QueryContainer from './QueryContainer';
import RecipeListItems from '../components/ListRecipes/RecipeListItems';
import { recipeListQuery } from '../queries/queries';


const RecipeListItemsContainer = props => {
  return (
    QueryContainer(recipeListQuery, RecipeListItems, { selectRecipe: props.selectRecipe })
  )
}

export default RecipeListItemsContainer;