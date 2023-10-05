import { FormattedMessage } from 'react-intl';
import Section from '../Section';
import html from '../../assets/logos/html-logo.png'
import css from '../../assets/logos/css-logo.png'
import javascript from '../../assets/logos/javascript-logo.png'
import cpp from '../../assets/logos/cpp-logo.png'
import python from '../../assets/logos/python-logo.png'
import php from '../../assets/logos/php-logo.png'
import react from '../../assets/logos/react-logo.png'
import vue from '../../assets/logos/vue-logo.png'
import angular from '../../assets/logos/angular-logo.png'
import nodejs from '../../assets/logos/nodejs-logo.png'
import django from '../../assets/logos/django-logo.png'
import symfony from '../../assets/logos/symfony-logo.png'
import androidstudio from '../../assets/logos/androidstudio-logo.png'
import mongodb from '../../assets/logos/mongodb-logo.png'
import sql from '../../assets/logos/sql-logo.png'
import git from '../../assets/logos/git-logo.png'
import docker from '../../assets/logos/docker-logo.png'
import ansible from '../../assets/logos/ansible-logo.png'
import jenkins from '../../assets/logos/jenkins-logo.png'
import nginx from '../../assets/logos/nginx-logo.png'
import apache from '../../assets/logos/apache-logo.png'
import circleci from '../../assets/logos/circleci-logo.png'
import styles from './Skills.module.css';


const Skills = () => {
  return (
    <>
      <Section id={'skills.proglang'}>
        <div className={styles.horizList}>
          <div className={styles.logoElem}>
            <img alt="HTML logo" width={'100px'} src={html}/>
          </div>
          <div className={styles.logoElem}>
            <img style={{marginRight: '1rem'}} alt="CSS logo" width={'100px'} src={css}/>
          </div>
          <div className={styles.logoElem}>
            <img style={{marginRight: '1rem'}} alt="Javascript logo" width={'80px'} src={javascript}/>
            <span>Javascript</span>
          </div>
          <div className={styles.logoElem}>
            <img style={{marginRight: '1rem'}} alt="C++ logo" width={'85px'} src={cpp}/>
          </div>
          <div className={styles.logoElem}>
            <img style={{marginRight: '1rem'}} alt="Python logo" width={'80px'} src={python}/>
            <span>Python</span>
          </div>
          <div className={styles.logoElem}>
            <img style={{marginRight: '1rem'}} alt="PHP logo" width={'110px'} src={php}/>
          </div>
        </div>
      </Section>
      <Section id={'skills.webframeworks'}>
        <div className={styles.horizList}>
          <div className={styles.logoElem}>
            <img alt="React logo" width={'100px'} src={react}/>
            <span>React</span>
          </div>
          <div className={styles.logoElem}>
            <img alt="Vue logo" width={'70px'} src={vue}/>
            <span>Vue</span>
          </div>
          <div className={styles.logoElem}>
            <img alt="Angular logo" width={'80px'} src={angular}/>
            <span>Angular</span>
          </div>
          <div className={styles.logoElem}>
            <img  style={{paddingTop: '1rem'}} alt="NodeJs logo" width={'150px'} src={nodejs}/>
          </div>
          <div className={styles.logoElem}>
            <img alt="Django logo" width={'150px'} src={django}/>
          </div>
          <div className={styles.logoElem}>
            <img alt="Symfony logo" width={'100px'} src={symfony}/>
          </div>
        </div>
      </Section>
      <Section id={"skills.mobframeworks"}>
        <div className={styles.horizList}>
          <div className={styles.logoElem}>
            <img alt="React logo" width={'100px'} src={react}/>
            <span>React Native</span>
          </div>
          <div className={styles.logoElem}>
            <img alt="Android Studio logo" width={'80px'} src={androidstudio}/>
            <span>Android Studio</span>
          </div>
        </div>
      </Section>
      <Section id={"skills.dbs"}>
        <div className={styles.horizList}>
          <div className={styles.logoElem}>
            <img alt="MongoDB logo" width={'150px'} src={mongodb}/>
          </div>
          <div className={styles.logoElem}>
            <img alt="MySQL logo" width={'150px'} src={sql}/>
          </div>
        </div>
      </Section>
      <Section id="skills.tools">
        <div className={styles.horizList}>
          <div className={styles.logoElem}>
            <img style={{marginRight: '1rem'}} alt="Git logo" width={'80px'} src={git}/>
            <span>Git</span>
          </div>
          <div className={styles.logoElem}>
            <img style={{marginRight: '1rem'}} alt="Docker logo" width={'80px'} src={docker}/>
            <span>Docker</span>
          </div>
          <div className={styles.logoElem}>
            <img style={{marginRight: '1rem', filter: 'invert(1)'}} alt="Ansible logo" width={'80px'} src={ansible}/>
            <span>Ansible</span>
          </div>
          <div className={styles.logoElem}>
            <img style={{marginRight: '1rem'}} alt="Jenkins logo" width={'80px'} src={jenkins}/>
            <span>Jenkins</span>
          </div>
          <div className={styles.logoElem}>
            <img alt="NginX logo" width={'120px'} src={nginx}/>
          </div>
          <div className={styles.logoElem}>
            <img alt="Apache logo" width={'120px'} src={apache}/>
          </div>
          <div className={styles.logoElem}>
            <img style={{marginRight: '1rem'}} alt="CircleCI logo" width={'70px'} src={circleci}/>
            <span>CircleCI</span>
          </div>
        </div>
      </Section>
      <Section id="skills.lang">
        <div className={styles.horizList}>
          <div className={styles.verticalList}>
            <h2><FormattedMessage id={'skills.lang.french'}/></h2>
            <span><FormattedMessage id={'skills.lang.french.description'}/></span>
          </div>
          <div className={styles.verticalList}>
            <h2><FormattedMessage id={'skills.lang.english'}/></h2>
            <span><FormattedMessage id={'skills.lang.english.description'}/></span>
          </div>
          <div className={styles.verticalList}>
            <h2><FormattedMessage id={'skills.lang.german'}/></h2>
            <span><FormattedMessage id={'skills.lang.german.description'}/></span>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Skills;