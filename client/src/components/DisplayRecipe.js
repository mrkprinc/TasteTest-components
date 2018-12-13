import React from 'react';
import Collapsible from './CollapsibleModule';
import styles from '../assets/css/blockComponents.module.css';
import image1 from '../images/spaghetti.jpg';

const DisplayRecipe = props => {
  console.log('-------------')
  console.log(props)

  return (
    <div className={styles.container}>
      <header>
        {props.name}
      </header>

      <div className={styles.imgWrapper}>
        <img width={320} height={240} alt="spaghetti and meatballs" src={image1} />
      </div>

      <div>
        <p>{props.description}</p>
      </div>

      <div>
        <Collapsible heading='Ingredients'>
          <ol>
            {props.topVersion.ingredients.map((ing, i) => {
              return <li key={i}>{ing}</li>
            })}
          </ol>
        </Collapsible>
      </div>

      <div>
        <Collapsible heading='Instructions'>
          <ol>
            {props.topVersion.instructions.map((ins, i) => {
              return <li key={i}>{ins}</li>
            })}
          </ol>
        </Collapsible>
      </div>
    </div>
  )
}

export default DisplayRecipe;