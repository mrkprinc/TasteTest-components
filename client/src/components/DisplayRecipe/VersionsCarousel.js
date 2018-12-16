import React from 'react';
import DisplayVersion from './DisplayVersion.js';

class VersionsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.versions = [props.getOneRecipe.topVersion, ...props.getOneRecipe.moreVersions.versions];
    this.state = {
      currentIndex: 1
    }
  }

  render() {
    return (
      <DisplayVersion {...this.versions[this.state.currentIndex]} />
    )
  }
}

export default VersionsCarousel;