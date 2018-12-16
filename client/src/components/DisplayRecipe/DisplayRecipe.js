import React from 'react';
import DisplayVersion from './DisplayVersion';
import VersionsCarouselContainer from '../../containers/VersionsCarouselContainer';
import { RightArrow } from './Arrows';
import styles from '../../assets/css/blockComponents.module.css';

class DisplayRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.recipe = props.getOneRecipe
    this.state = {
      loadVersions: false
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <header>
          {this.recipe.name}
        </header>

        <div>
          <p>{this.recipe.description}</p>
        </div>

        {this.state.loadVersions ? 
          <VersionsCarouselContainer /> :
          <DisplayVersion {...this.recipe.topVersion} />
        }
        
        {!this.state.loadVersions && this.recipe.moreVersions.count > 0 && (
          <div 
            className={styles.arrowBar}
            onClick={() => this.setState({loadVersions: true})}
          >
            Show more versions
            <RightArrow onClick={null} />
          </div>
        )}
      </div>
    )
  }
}

export default DisplayRecipe;