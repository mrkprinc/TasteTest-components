import React from 'react';
import { container as blockComponent } from '../../assets/css/blockComponents.module.css';
import styles from '../../assets/css/ListBuilder.module.css';

class ParseRecipe extends React.Component {
  state = {
    outputItems: ['parsing output', 'try these lines']
  }

  render() {
    return (
      <section className={blockComponent}>
        <header>
          Copy-Paste a Recipe
        </header>

        <div>
          <textarea rows={7} placeholder='Paste ingredients here' />
        </div>

        <div>
          <textarea rows={7} placeholder='Paste instructions here' />
        </div>

        <div className={styles.container}>
          {this.state.outputItems.map((item, i) => {
            return (
              <div className={styles.itemField} key={i} >
                <span className={styles.listNumber}>{i + 1}. </span>
                <span className={styles.itemText}>{item}</span>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

export default ParseRecipe;