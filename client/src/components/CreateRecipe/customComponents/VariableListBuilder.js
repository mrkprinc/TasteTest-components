import React from 'react';
import styles from '../../../assets/css/Variable.module.css';

class VariableListBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.context[props.field]
  }

  handleSubmit(e) {
    e.preventDefault();
    const { description, value, unit } = this.state.variableInput
    if(description.length > 0 && value > 0 && unit.length > 0) {
      let currentItems = this.state.listItems;
      this.setState({ 
        listItems: [...currentItems, { description, value, unit }],
        variableInput: {
          description: '',
          value: 0,
          unit: ''
        }
      })
    }
  }

  removeItem(i) {
    let listItems = [...this.state.listItems];
    listItems.splice(i, 1);
    this.setState({ listItems });
  }

  render() {
    return (

      <div className={styles.container}>

        {this.state.listItems.map((item, i) => {
          return (
            <div className={styles.itemField} key={i} >
              <span className={styles.itemText}>
                {item.description}
              </span>

              <button className={styles.newLineButton} onClick={e => this.removeItem(i)}>X</button>
            </div>
          )
        })}

        <form className={styles.addItemField} onSubmit={e => this.handleSubmit(e)}>
          <input 
            className={styles.description}
            type='text' placeholder='Description'
            value={this.state.variableInput.description}
            onChange={e => this.setState({ variableInput: { description: e.target.value } })}
          />

          <input
            type='text' placeholder='Number'
            value={this.state.variableInput.value}
            onChange={e => this.setState({ variableInput: { value: e.target.value }})}
          />

          <input
            type='text' placeholder='Unit'
            value={this.state.variableInput.unit}
            onChange={e => this.setState({ variableInput: { unit: e.target.value }})}
          />

          <button type='submit' className={styles.newLineButton}>↩</button>
        </form>
      </div>
    )
  }
}

export default VariableListBuilder;