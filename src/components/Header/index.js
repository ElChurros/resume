import React from 'react';
import {Link} from 'react-router-dom';

import SectionButton from './SectionButton';
import styles from './Header.module.css'

export function Header({sections, currentSection, setSection, ...props}) {
  return (
    <nav className={styles.nav}>
      {sections.map(s =>
        <SectionButton held={currentSection === s} onClick={(e) => setSection(s)}>{s}</SectionButton>
      )}
    </nav>
    );
}

export default Header;