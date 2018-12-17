import gql from 'graphql-tag';
import QueryContainer from './QueryContainer';
import VersionsCarousel from '../components/DisplayRecipe/VersionsCarousel';

const VersionsCarouselContainer = props => {
  const query = gql`
    {
      getOneRecipe(id: "${props.id}") {
        id
        topVersion {
          ingredients
          instructions
        }
        moreVersions {
          versions {
            ingredients
            instructions
          }
        }
      }
    }
  `

  return QueryContainer(query, VersionsCarousel);
}

export default VersionsCarouselContainer;