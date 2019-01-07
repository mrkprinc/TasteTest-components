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
    if(description.length > 0 && value > 0 && unit !== -1) {
      this.setState(state => {
        return {
          listItems: [...state.listItems, { description, value, unit }],
          variableInput: { description: '', value: null, unit: -1 }
        }
      })
    }
  }

  removeItem(i) {
    this.setState(state => {
      state.listItems.splice(i, 1);
      return state;
    })
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.listItems.map((item, i) => {
          return (
            <div className={styles.itemField} key={i} >
              <span className={styles.itemText}>
                {item.description.padEnd(25, '  -')} {item.value} {item.unit}
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
            onChange={e => {
              const val = e.target.value;
              this.setState(state => {
                state.variableInput.description = val;
                return state;
              })
            }}
          />

          <input
            type='text' placeholder='Number'
            value={this.state.variableInput.value}
            onChange={e => {
              const val = e.target.value;
              this.setState(state => {
                state.variableInput.value = val.replace(/\D/g, '');
                return state;
              })
            }}
          />

          <select
            value={this.state.variableInput.unit}
            onChange={e => {
              const val = e.target.value;
              this.setState(state => {
                state.variableInput.unit = val;
                return state;
              })
            }}
          >
            <option value={-1}>Select</option>
            <option value='grams'>grams</option>
          </select>
        

          <button type='submit' className={styles.newLineButton}>↩</button>
        </form>
      </div>
    )
  }
}

export default VariableListBuilder;