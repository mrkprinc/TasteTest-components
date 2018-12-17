import React from 'react';
import styles from '../../assets/css/DisplayRecipe.module.css';

export const LeftArrow = props => {
  return (
    <span className={styles.arrowBar} onClick={props.onClick}>
      <svg height="50" width="50">
        <polygon points="45,5 5,25 45,45" className={styles.arrow} />
        <span className='fallback'>⇦</span>
      </svg>
      {Boolean(props.children) && props.children}
    </span>
  )
}

export const RightArrow = props => {
  return (
    <span className={styles.arrowBar} onClick={props.onClick}>
      {Boolean(props.children) && props.children}
      <svg height="50" width="50">
        <polygon points="5,5 45,25 5,45" className={styles.arrow} />
        <span className='fallback'>⇨</span>
      </svg>
    </span>
  )
}