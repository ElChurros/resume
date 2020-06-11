import React from 'react';
import { FormattedMessage } from 'react-intl';

import Section from '../Section';
import styles from './Projects.module.css';

export function Projects(props) {
  return (
    <>
      <Section id='projects.eip' period>
        <p><FormattedMessage id={'projects.eip.description'}/></p>
          <ul>
            {[...Array(3)].map((v, i) => <li><FormattedMessage id={`projects.eip.feature${i + 1}`}/></li>)}
          </ul>
        <img alt="Jammee-Studio screenshot" className={styles.screenshot} src={process.env.PUBLIC_URL + '/studio.png'}></img>
      </Section>
    </>
  );
}

export default Projects;