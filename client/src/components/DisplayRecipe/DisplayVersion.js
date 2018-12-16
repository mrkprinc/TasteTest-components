import React from 'react';
import Collapsible from '../CollapsibleModule';

const DisplayVersion = props => {
  return (
    <section>
      <div>
        <Collapsible heading='Ingredients'>
          <ol>
            {props.ingredients.map((ing, i) => {
              return <li key={i}>{ing}</li>
            })}
          </ol>
        </Collapsible>
      </div>

      <div>
        <Collapsible heading='Instructions'>
          <ol>
            {props.instructions.map((ins, i) => {
              return <li key={i}>{ins}</li>
            })}
          </ol>
        </Collapsible>
      </div>
    </section>
  )
}

export default DisplayVersion;