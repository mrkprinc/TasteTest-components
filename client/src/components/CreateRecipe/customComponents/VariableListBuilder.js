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
      this.props.context.push({ description, value, unit }, this.props.field, 'listItems');
      this.props.context.update({ description: '', value: '', unit: -1 }, this.props.field, 'variableInput');
    }
  }

  removeItem(i) {
    const newList = [...this.state.listItems];
    newList.splice(i, 1);
    this.props.context.update(newList, this.props.field, 'listItems');
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
              this.props.context.update(val, this.props.field, 'variableInput', 'description');
            }}
          />

          <input
            type='text' placeholder='Number'
            value={this.state.variableInput.value}
            onChange={e => {
              const val = e.target.value.replace(/\D/, '');
              this.props.context.update(val, this.props.field, 'variableInput', 'value');
            }}
          />

          <select
            value={this.state.variableInput.unit}
            onChange={e => {
              const val = e.target.value;
              this.props.context.update(val, this.props.field, 'variableInput', 'unit');
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