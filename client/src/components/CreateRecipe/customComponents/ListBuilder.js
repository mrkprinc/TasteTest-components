import React from 'react';
import ClickableNumbers from '../../ClickableNumbers';
import styles from '../../../assets/css/ListBuilder.module.css';

class ListBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.context[this.props.field];
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.textInput.length > 0) {
      this.props.context.push({ displayText: this.state.textInput }, this.props.field, 'listItems');
      this.props.context.update('', this.props.field, 'textInput');
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
              onChange={e => {
                const val = e.target.value;
                this.props.context.update(val, this.props.field, 'textInput');
              }}
            />
            <button type='submit' className={styles.newLineButton}>↩</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ListBuilder;