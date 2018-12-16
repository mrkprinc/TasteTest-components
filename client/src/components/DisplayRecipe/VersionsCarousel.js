import React from 'react';
import DisplayVersion from './DisplayVersion.js';
import styles from '../../assets/css/blockComponents.module.css';
import { LeftArrow, RightArrow } from './Arrows.js';

class VersionsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.versions = [props.getOneRecipe.topVersion, ...props.getOneRecipe.moreVersions.versions];
    this.state = {
      currentIndex: 1
    }
  }

  leftClick() {
    let currentIndex = this.state.currentIndex - 1;
    if(currentIndex > -1) this.setState({ currentIndex });
  }

  rightClick() {
    let currentIndex = this.state.currentIndex + 1;
    if(currentIndex < this.versions.length) this.setState({ currentIndex });
  }

  render() {
    return (
      <div>
        <DisplayVersion {...this.versions[this.state.currentIndex]} />
        <div className={styles.arrowBar}>
          <LeftArrow 
            onClick={() => this.leftClick()} 
          />
          
          <RightArrow 
            onClick={() => this.rightClick()} 
          />
        </div>
      </div>
    )
  }
}

export default VersionsCarousel;