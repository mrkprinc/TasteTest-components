import React from 'react';

const Loading = props => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '4px',
      borderRadius: '4px',
      backgroundColor: '#ee9bac'
    }}>{props.text}</div>
  )
}

export default Loading;