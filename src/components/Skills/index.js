import FormattedMessage from '../FormattedMessage'
import Section from '../Section'
import html from '../../assets/logos/html-logo.png'
import css from '../../assets/logos/css-logo.png'
import javascript from '../../assets/logos/javascript-logo.png'
import nodejs from '../../assets/logos/nodejs-logo.png'
import cpp from '../../assets/logos/cpp-logo.png'
import python from '../../assets/logos/python-logo.png'
import php from '../../assets/logos/php-logo.png'
import react from '../../assets/logos/react-logo.png'
import vue from '../../assets/logos/vue-logo.png'
import angular from '../../assets/logos/angular-logo.png'
import express from '../../assets/logos/express-logo.png'
import django from '../../assets/logos/django-logo.png'
import symfony from '../../assets/logos/symfony-logo.png'
import socketio from '../../assets/logos/socketio.png'
import webrtc from '../../assets/logos/webrtc-logo.png'
import webaudio from '../../assets/logos/webaudio-logo.png'
import webassembly from '../../assets/logos/webassembly-logo.png'
import tailwind from '../../assets/logos/tailwind-logo.png'
import motion from '../../assets/logos/motion-logo.webp'
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
import styles from './Skills.module.css'

const Skills = () => {
  return <>
    <Section prefix='skills.proglang'>
      <div className={styles.horizList}>
        <div className={styles.logoElem}>
          <img alt="HTML logo" width={'100px'} src={html} />
        </div>
        <div className={styles.logoElem}>
          <img style={{ marginRight: '1rem' }} alt="CSS logo" width={'100px'} src={css} />
        </div>
        <div className={styles.logoElem}>
          <img style={{ marginRight: '1rem' }} alt="Javascript logo" width={'80px'} src={javascript} />
          <span>Javascript</span>
        </div>
        <div className={styles.logoElem}>
          <img style={{ paddingTop: '1rem' }} alt="NodeJs logo" width={'150px'} src={nodejs} />
        </div>
        <div className={styles.logoElem}>
          <img style={{ marginRight: '1rem' }} alt="C++ logo" width={'85px'} src={cpp} />
        </div>
        <div className={styles.logoElem}>
          <img style={{ marginRight: '1rem' }} alt="Python logo" width={'80px'} src={python} />
          <span>Python</span>
        </div>
        <div className={styles.logoElem}>
          <img style={{ marginRight: '1rem' }} alt="PHP logo" width={'110px'} src={php} />
        </div>
      </div>
    </Section>
    <Section prefix='skills.webframeworks'>
      <div className={styles.horizList}>
        <div className={styles.logoElem}>
          <img alt="React logo" width={'100px'} src={react} />
          <span>React</span>
        </div>
        <div className={styles.logoElem}>
          <img alt="Vue logo" width={'70px'} src={vue} />
          <span>Vue</span>
        </div>
        <div className={styles.logoElem}>
          <img alt="Angular logo" width={'80px'} src={angular} />
          <span>Angular</span>
        </div>
        <div className={styles.logoElem}>
          <img className={styles.inverted} alt="Express logo" width={'150px'} src={express} />
        </div>
        <div className={styles.logoElem}>
          <img alt="Django logo" width={'150px'} src={django} />
        </div>
        <div className={styles.logoElem}>
          <img alt="Symfony logo" width={'100px'} src={symfony} />
        </div>
      </div>
    </Section>
    <Section prefix='skills.weblibs'>
      <div className={styles.horizList}>
        <div className={styles.logoElem}>
          <img alt='Socket.io logo' width={'80px'} style={{ marginRight: '1rem' }} src={socketio} />
          <span>Socket.io</span>
        </div>
        <div className={styles.logoElem}>
          <img alt='WebRTC logo' width={'80px'} style={{ marginRight: '1rem' }} src={webrtc} />
          <span>WebRTC</span>
        </div>
        <div className={styles.logoElem}>
          <img alt='WebAudio logo' width='80px' style={{ marginRight: '1rem' }} src={webaudio} />
          <span>WebAudio</span>
        </div>
        <div className={styles.logoElem}>
          <img alt='WebAssembly logo' width='80px' style={{ marginRight: '1rem' }} src={webassembly} />
          <span>WebAssembly</span>
        </div>
        <div className={styles.logoElem}>
          <img alt='TailwindCSS logo' width='80px' style={{ marginRight: '1rem' }} src={tailwind} />
          <span>Tailwind CSS</span>
        </div>
        <div className={styles.logoElem}>
          <img alt='Motion logo' width='80px' style={{ marginRight: '1rem' }} src={motion} />
          <span>Motion</span>
        </div>
      </div>
    </Section>
    <Section prefix='skills.mobframeworks'>
      <div className={styles.horizList}>
        <div className={styles.logoElem}>
          <img alt="React logo" width={'100px'} src={react} />
          <span>React Native</span>
        </div>
        <div className={styles.logoElem}>
          <img alt="Android Studio logo" width={'80px'} src={androidstudio} />
          <span>Android Studio</span>
        </div>
      </div>
    </Section>
    <Section prefix='skills.dbs'>
      <div className={styles.horizList}>
        <div className={styles.logoElem}>
          <img alt="MongoDB logo" width={'150px'} src={mongodb} />
        </div>
        <div className={styles.logoElem}>
          <img alt="MySQL logo" width={'150px'} src={sql} />
        </div>
      </div>
    </Section>
    <Section prefix='skills.tools'>
      <div className={styles.horizList}>
        <div className={styles.logoElem}>
          <img style={{ marginRight: '1rem' }} alt="Git logo" width={'80px'} src={git} />
          <span>Git</span>
        </div>
        <div className={styles.logoElem}>
          <img style={{ marginRight: '1rem' }} alt="Docker logo" width={'80px'} src={docker} />
          <span>Docker</span>
        </div>
        <div className={styles.logoElem}>
          <img className={styles.inverted} style={{ marginRight: '1rem' }} alt="Ansible logo" width={'80px'} src={ansible} />
          <span>Ansible</span>
        </div>
        <div className={styles.logoElem}>
          <img style={{ marginRight: '1rem' }} alt="Jenkins logo" width={'80px'} src={jenkins} />
          <span>Jenkins</span>
        </div>
        <div className={styles.logoElem}>
          <img alt="NginX logo" width={'120px'} src={nginx} />
        </div>
        <div className={styles.logoElem}>
          <img alt="Apache logo" width={'120px'} src={apache} />
        </div>
        <div className={styles.logoElem}>
          <img style={{ marginRight: '1rem' }} alt="CircleCI logo" width={'70px'} src={circleci} />
          <span>CircleCI</span>
        </div>
      </div>
    </Section>
    <Section prefix='skills.lang'>
      <div className={styles.horizList}>
        <div className={styles.verticalList}>
          <h2><FormattedMessage id={'french'} /></h2>
          <span><FormattedMessage id={'french.description'} /></span>
        </div>
        <div className={styles.verticalList}>
          <h2><FormattedMessage id={'english'} /></h2>
          <span><FormattedMessage id={'english.description'} /></span>
        </div>
        <div className={styles.verticalList}>
          <h2><FormattedMessage id={'german'} /></h2>
          <span><FormattedMessage id={'german.description'} /></span>
        </div>
      </div>
    </Section>
  </>
}

export default Skills