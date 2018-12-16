import React from 'react';

export const LeftArrow = props => {
  return (
    <span onClick={props.onClick}>⇦</span>
  )
}

export const RightArrow = props => {
  return (
    <span onClick={props.onClick}>⇨</span>
  )
}