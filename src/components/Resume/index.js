import React from 'react';

import styles from './Resume.module.css'

export class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.sections = ['Experience', 'Contact'];
    this.state = {
      currentSection: 'Experience',
    }
  }
  
  render() {
    return (
      <nav className={styles.resume}>
        {this.sections.map(s =>
        <h2 key={s}>
          {s}
        </h2>
        )}
      </nav>
      );
    }
  }
  
  export default Resume;