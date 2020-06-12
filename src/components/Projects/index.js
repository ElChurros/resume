import React from 'react';
import { FormattedMessage } from 'react-intl';

import Section from '../Section';
import styles from './Projects.module.css';

export function Projects(props) {
  return (
    <>
      <Section id='projects.eip' period>
        <p><FormattedMessage id={'projects.eip.description'}/></p>
          <img alt="Jammee-Studio screenshot" className={styles.screenshot} src={process.env.PUBLIC_URL + '/studio.png'}></img>
          <ul>
            {[...Array(3)].map((v, i) => <li key={i}><FormattedMessage id={`projects.eip.feature${i + 1}`}/></li>)}
          </ul>
      </Section>
    </>
  );
}

export default Projects;