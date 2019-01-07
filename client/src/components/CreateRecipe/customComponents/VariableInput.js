import React from 'react';
import styles from '../../../assets/css/VariableInput.module.css';

class VariableInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      variableInput: Object.assign({
        description: '',
        value: 0,
        unitValue: -1
      }, props.variableInput)
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <form className={styles.addItemField}>
          <input 
            type='text' placeholder='Description'
            value={this.state.variableInput.description}
          />

          <input
            type='text' placeholder='Number'
            value={this.state.variableInput.value}
          />

          <input
            type='text' placeholder='Unit'
            value={this.state.variableInput.unit}
          />

          <button type='submit' className={styles.newLineButton}>↩</button>
        </form>
      </div>
    )
  }
}

export default VariableInput;