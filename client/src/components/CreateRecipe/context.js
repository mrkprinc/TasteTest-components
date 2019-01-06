import React from 'react';

export const context = React.createContext();

export const fields = {
  name: 'name',
  description: 'description',
  ingredients: 'ingredients',
  instructions: 'instructions'
}

export class NewRecipeContext extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      ingredients: {
        textInput: '',
        listItems: []
      },
      instructions: {
        textInput: '',
        listItems: []
      },
  
      update: (field, value) => {
        this.setState({ [field]: value }, () => console.log(this.state));
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