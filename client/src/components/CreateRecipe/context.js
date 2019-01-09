import React from 'react';

export const context = React.createContext();

export const fields = {
  name: 'name',
  description: 'description',
  ingredients: 'ingredients',
  instructions: 'instructions'
}

const initialState = {
  name: '',
  description: '',
  ingredients: {
    variableInput: {
      description: '',
      value: '',
      unit: -1
    },
    listItems: []
  },
  instructions: {
    textInput: '',
    listItems: []
  }
}

export class NewRecipeContext extends React.Component {
  constructor() {
    super();
    this.state = {
      ...initialState,
      update: (value, ...field) => {
        this.setState(state => {
          let changeField = state;
          for(let i = 0; i < field.length - 1; i++) {
            changeField = changeField[field[i]];
          }
          changeField[field[field.length - 1]] = value;
          return state;
        })
      },

      push: (value, ...field) => {
        this.setState(state => {
          let changeField = state;
          for(let i = 0; i < field.length; i++) {
            changeField = changeField[field[i]];
          }
          changeField.push(value);
          return state;
        })
      },

      clear: () => {
        this.setState(state => {
          return Object.assign(state, initialState);
        })
      }
    }
  }

  render() {
    return (
      <context.Provider value={this.state}>
        {this.props.children}
      </context.Provider>
    )
  }
}