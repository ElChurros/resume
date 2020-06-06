import React from 'react';

import Section from '../Section';
import styles from './Projects.module.css';

export function Projects(props) {
  return (
    <>
      <Section title='Epitech Innovative Project' period="Master's project">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img alt="Jammee-Studio screenshot" className={styles.screenshot} src={process.env.PUBLIC_URL + '/studio.png'}></img>
      </Section>
    </>
  );
}

export default Projects;