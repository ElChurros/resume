import { FormattedMessage } from 'react-intl';
import Section from '../Section';
import studio from '../../assets/studio.png'
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <>
      <Section id='projects.eip' period>
        <p><FormattedMessage id={'projects.eip.description'}/></p>
        <ul>
          {[...Array(3)].map((v, i) => <li key={i}><FormattedMessage id={`projects.eip.feature${i + 1}`}/></li>)}
        </ul>
        <img alt="Jammee-Studio screenshot" className={styles.screenshot} src={studio}></img>
        <p><FormattedMessage id={'projects.eip.stack'} /></p>
        <ul>
          {[...Array(7)].map((v, i) => <li key={i}><FormattedMessage id={`projects.eip.tech${i + 1}`} /></li>)}
        </ul>
      </Section>
    </>
  );
}

export default Projects;