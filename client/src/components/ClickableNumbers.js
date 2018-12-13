import React from 'react';

const ClickableNumbers = props => {
  let keys = 0;
  
  function replace(str) {
    const regex = /\d+/g;
    const match = regex.exec(str);
    
    if(match) {
      return [
        <span key={++keys}>{str.slice(0, match.index)}</span>, 
        <span key={++keys} className='clickableNumber' onClick={() => console.log(match[0])}>{match}</span>, 
        replace(str.slice(regex.lastIndex))
      ]
    } else return <span key={++keys}>{str}</span>;
  }

  return <div>{replace(props.string)}</div>;
}

export default ClickableNumbers;