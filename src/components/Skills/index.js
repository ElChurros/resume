import React from 'react';

import Section from '../Section';
import styles from './Skills.module.css';

export function Skills(props) {
  return (
    <>
      <Section title={'Web Development'}>
        <span>test span</span>
      </Section>
      <Section title={"Mobile Apps"}>
        <span>test span</span>
      </Section>
    </>
  );
}

export default Skills;