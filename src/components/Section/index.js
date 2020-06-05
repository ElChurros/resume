import React from 'react';

import styles from './Section.module.css';

export function Section({title, children, ...props}) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        {children}
      </div>
    </>
  );
}

export default Section;