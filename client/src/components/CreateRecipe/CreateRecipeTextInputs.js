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
              onChange={e => context.update(fields.name, e.target.value)}
            />

            <textarea 
              placeholder='Description' 
              value={context.description}
              onChange={e => context.update(fields.description, e.target.value)}
            />
          </form>
        )
      }}
    </context.Consumer>
  )
}

export default CreateRecipeTextInputs;