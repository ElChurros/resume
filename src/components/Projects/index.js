import { FormattedMessage } from 'react-intl';
import Section from '../Section';
import studio from '../../assets/studio.png'
import audiorooms from '../../assets/audiorooms.png'
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <>
      <Section id='projects.audiorooms' period location titleLink="https://audiorooms.onrender.com">
        <p><FormattedMessage id="projects.audiorooms.description"/></p>
        <ul>
          {[...Array(4)].map((v, i) => <li key={i}><FormattedMessage id={`projects.audiorooms.feature${i + 1}`}/></li>)}
        </ul>
        <img alt="AudioRooms screenshot" className={styles.screenshot} src={audiorooms}/>
        <p><FormattedMessage id="projects.audiorooms.stack"/></p>
        <ul>
          {[...Array(5)].map((v, i) => <li><FormattedMessage id={`projects.audiorooms.tech${i + 1}`}/></li>) }
        </ul>
        <p><FormattedMessage id="projects.audiorooms.sourcecode"/><a href='https://github.com/ElChurros/AudioRooms' target='_blank' rel='noopener noreferrer'><i className="fab fa-github" /> Github</a></p>
      </Section>
      <Section id='projects.eip' period location>
        <p><FormattedMessage id={'projects.eip.description'}/></p>
        <ul>
          {[...Array(3)].map((v, i) => <li key={i}><FormattedMessage id={`projects.eip.feature${i + 1}`}/></li>)}
        </ul>
        <img alt="Jammee-Studio screenshot" className={styles.screenshot} src={studio} />
        <p><FormattedMessage id={'projects.eip.stack'} /></p>
        <ul>
          {[...Array(7)].map((v, i) => <li key={i}><FormattedMessage id={`projects.eip.tech${i + 1}`} /></li>)}
        </ul>
      </Section>
    </>
  );
}

export default Projects;