import React from 'react';
import Collapsible from 'react-collapsible';
import styles from '../assets/css/Collapsible.module.css';

const CollapsibleModule = props => {
  return (
    <Collapsible 
      trigger={<span>{props.heading}</span>}
      triggerTagName='div'
      triggerClassName={styles.heading}
      triggerOpenedClassName={styles.heading}
      contentInnerClassName={styles.content}
      classParentString={styles.container}
    >
      {props.children}
    </Collapsible>
  )
}

export default CollapsibleModule;