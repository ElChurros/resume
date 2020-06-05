import React from 'react';

import Section from '../Section';
import styles from './Skills.module.css';

export function Skills(props) {
  return (
    <>
      <Section title={'Programming languages'}>
        <div className={styles.horizList}>
          <div>
            <img size={'80px'} alt="Javascript logo" width={'100px'} src={process.env.PUBLIC_URL + '/logos/javascript-logo.png'}></img>
            <span>Javascript</span>
          </div>
          <div>
            <img alt="Vue logo" width={'70px'} src={process.env.PUBLIC_URL + '/logos/vue-logo.png'}></img>
            <span>Vue</span>
          </div>
          <div>
            <img alt="Angular logo" width={'80px'} src={process.env.PUBLIC_URL + '/logos/angular-logo.png'}></img>
            <span>Angular</span>
          </div>
        </div>
      </Section>
      <Section title={'Web frameworks'}>
        <div className={styles.horizList}>
          <div>
            <img alt="React logo" width={'100px'} src={process.env.PUBLIC_URL + '/logos/react-logo.png'}></img>
            <span>React</span>
          </div>
          <div>
            <img alt="Vue logo" width={'70px'} src={process.env.PUBLIC_URL + '/logos/vue-logo.png'}></img>
            <span>Vue</span>
          </div>
          <div>
            <img alt="Angular logo" width={'80px'} src={process.env.PUBLIC_URL + '/logos/angular-logo.png'}></img>
            <span>Angular</span>
          </div>
        </div>
      </Section>
      <Section title={"Mobile frameworks"}>
        <div className={styles.horizList}>
          <div>
            <img alt="React logo" width={'100px'} src={process.env.PUBLIC_URL + '/logos/react-logo.png'}></img>
            <span>React Native</span>
          </div>
          <div>
            <img alt="Android Studio logo" width={'80px'} src={process.env.PUBLIC_URL + '/logos/androidstudio-logo.png'}></img>
            <span>Android Studio</span>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Skills;