import React from 'react';
import Collapsible from './CollapsibleModule';
import styles from '../assets/css/blockComponents.module.css';
import image1 from '../images/spaghetti.jpg';

const DisplayRecipe = props => {
  return (
    <div className={styles.container}>
      <header>
        Spaghetti and Meatballs
      </header>

      <div className={styles.imgWrapper}>
        <img width={320} height={240} alt="spaghetti and meatballs" src={image1} />
      </div>

      <div>
        <Collapsible heading='Ingredients'>
          These are the ingredients.
        </Collapsible>
      </div>

      <div>
        <Collapsible heading='Instructions'>
          These are the instructions.
        </Collapsible>
      </div>

      <div>
        <Collapsible heading='Discussion'>
          This is the discussion.
        </Collapsible>
      </div>
    </div>

  )
}

export default DisplayRecipe;