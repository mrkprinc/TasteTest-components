import React from 'react';
import styles from '../assets/css/ListBuilder.module.css';

export const types = {
  ingredients: 'ingredients',
  instructions: 'instructions'
}

export const ListBuilder = props => {
  return (
    <div class={styles.container}>
      This is where I add {props.type}.
    </div>
  )
}