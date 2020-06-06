import React from 'react';

import styles from './Section.module.css';

export function Section({title, location, period, children, ...props}) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      {(location || period ) && <p className={styles.complement}><span>
        {period && <span className={styles.period}>{period}</span>}
        {location && <span className={styles.location}>{location}</span>}
        </span></p>}
      <div className={styles.content}>
        {children}
      </div>
    </>
  );
}

export default Section;