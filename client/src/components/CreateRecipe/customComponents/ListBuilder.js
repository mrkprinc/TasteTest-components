import React from 'react';
import ClickableNumbers from '../../ClickableNumbers';
import styles from '../../../assets/css/ListBuilder.module.css';

export class ListBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.context[props.field]
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.textInput.length > 0) {
      let currentItems = this.state.listItems;
      let displayText = this.state.textInput;
      this.setState({ 
        listItems: [...currentItems, { displayText }],
        textInput: ''
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
              <span className={styles.listNumber}>{i + 1}. </span>

              <span className={styles.itemText}>
                <ClickableNumbers string={item.displayText} />
              </span>

              <button className={styles.newLineButton} onClick={e => this.removeItem(i)}>X</button>
            </div>
          )
        })}

        <form onSubmit={e => this.handleSubmit(e)}>
          <div className={styles.addItemField}>
            <span className={styles.listNumber}>{this.state.listItems.length + 1}. </span>
            <input 
              type='text' placeholder='Next item' 
              value={this.state.textInput}
              onChange={e => this.setState({ textInput: e.target.value })}
            />
            <button type='submit' className={styles.newLineButton}>↩</button>
          </div>
        </form>
      </div>
    )
  }
}