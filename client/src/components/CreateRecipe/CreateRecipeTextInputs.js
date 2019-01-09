import React from 'react';
import { context, fields } from './context';

const CreateRecipeTextInputs = props => {
  return (
    <context.Consumer>
      {context => {
        return (
          <form>
            <input 
              type='text' placeholder='Recipe Name' 
              value={context.name}
              onChange={e => context.update(e.target.value, fields.name)}
            />

            <textarea 
              placeholder='Description' 
              value={context.description}
              onChange={e => context.update(e.target.value, fields.description)}
            />
          </form>
        )
      }}
    </context.Consumer>
  )
}

export default CreateRecipeTextInputs;