import React from 'react';

import Section from '../Section';
import styles from './Skills.module.css';

export function Skills(props) {
  return (
    <>
      <Section title={'Programming languages'}>
        <div className={styles.horizList}>
          <div className={styles.logoElem}>
            <img alt="HTML logo" width={'100px'} src={process.env.PUBLIC_URL + '/logos/html-logo.png'}/>
          </div>
          <div className={styles.logoElem}>
            <img style={{marginRight: '10px'}} alt="CSS logo" width={'100px'} src={process.env.PUBLIC_URL + '/logos/css-logo.png'}/>
          </div>
          <div className={styles.logoElem}>
            <img style={{marginRight: '10px'}} alt="Javascript logo" width={'80px'} src={process.env.PUBLIC_URL + '/logos/javascript-logo.png'}/>
            <span>Javascript</span>
          </div>
          <div className={styles.logoElem}>
            <img style={{marginRight: '10px'}} alt="C++ logo" width={'85px'} src={process.env.PUBLIC_URL + '/logos/c++-logo.png'}/>
          </div>
          <div className={styles.logoElem}>
            <img style={{marginRight: '10px'}} alt="Python logo" width={'80px'} src={process.env.PUBLIC_URL + '/logos/python-logo.png'}/>
            <span>Python</span>
          </div>
          <div className={styles.logoElem}>
            <img style={{marginRight: '10px'}} alt="PHP logo" width={'110px'} src={process.env.PUBLIC_URL + '/logos/php-logo.png'}/>
          </div>
        </div>
      </Section>
      <Section title={'Web frameworks'}>
        <div className={styles.horizList}>
          <div className={styles.logoElem}>
            <img alt="React logo" width={'100px'} src={process.env.PUBLIC_URL + '/logos/react-logo.png'}/>
            <span>React</span>
          </div>
          <div className={styles.logoElem}>
            <img alt="Vue logo" width={'70px'} src={process.env.PUBLIC_URL + '/logos/vue-logo.png'}/>
            <span>Vue</span>
          </div>
          <div className={styles.logoElem}>
            <img alt="Angular logo" width={'80px'} src={process.env.PUBLIC_URL + '/logos/angular-logo.png'}/>
            <span>Angular</span>
          </div>
          <div><img alt="Django logo" width={'150px'} src={process.env.PUBLIC_URL + '/logos/django-logo.png'}/></div>
          <div><img alt="Symfony logo" width={'100px'} src={process.env.PUBLIC_URL + '/logos/symfony-logo.png'}/></div>
        </div>
      </Section>
      <Section title={"Mobile frameworks"}>
        <div className={styles.horizList}>
          <div className={styles.logoElem}>
            <img alt="React logo" width={'100px'} src={process.env.PUBLIC_URL + '/logos/react-logo.png'}/>
            <span>React Native</span>
          </div>
          <div className={styles.logoElem}>
            <img alt="Android Studio logo" width={'80px'} src={process.env.PUBLIC_URL + '/logos/androidstudio-logo.png'}/>
            <span>Android Studio</span>
          </div>
        </div>
      </Section>
      <Section title={"Databases"}>
        <div className={styles.horizList}>
          <div><img alt="MongoDB logo" width={'150px'} src={process.env.PUBLIC_URL + '/logos/mongodb-logo.png'}/></div>
          <div><img alt="MySQL logo" width={'150px'} src={process.env.PUBLIC_URL + '/logos/sql-logo.png'}/></div>
        </div>
      </Section>
      <Section title="Development tools">
        <div className={styles.horizList}>
          <div className={styles.logoElem}>
            <img style={{marginRight: '10px'}} alt="Git logo" width={'80px'} src={process.env.PUBLIC_URL + '/logos/git-logo.png'}/>
            <span>Git</span>
          </div>
          <div className={styles.logoElem}>
            <img style={{marginRight: '10px'}} alt="Docker logo" width={'80px'} src={process.env.PUBLIC_URL + '/logos/docker-logo.png'}/>
            <span>Docker</span>
          </div>
        </div>
      </Section>
      <Section title="Languages">
        <div className={styles.horizList}>
          <div className={styles.verticalList}>
            <h2>French</h2>
            <span>Native tongue</span>
          </div>
          <div className={styles.verticalList}>
            <h2>English</h2>
            <span>Fluent level<br/>(TOEFL score 105, 1 year studying in California)</span>
          </div>
          <div className={styles.verticalList}>
            <h2>German</h2>
            <span>B1 level</span>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Skills;