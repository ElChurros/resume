import FormattedMessage from '../FormattedMessage';
import Section from '../Section';
import SectionContext from '../../context/sectionContext';
import studio from '../../assets/studio.png'
import audiorooms from '../../assets/audiorooms.png'
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <>
      <SectionContext.Provider value='projects.audiorooms'>
        <Section period location titleLink="https://audiorooms.onrender.com">
          <p><FormattedMessage id="description"/></p>
          <ul>
            {[...Array(4)].map((v, i) => <li key={i}><FormattedMessage id={`feature${i + 1}`}/></li>)}
          </ul>
          <img alt="AudioRooms screenshot" className={styles.screenshot} src={audiorooms}/>
          <p><FormattedMessage id="stack"/></p>
          <ul>
            {[...Array(5)].map((v, i) => <li key={i}><FormattedMessage id={`tech${i + 1}`}/></li>) }
          </ul>
          <p><FormattedMessage id="sourcecode"/><a href='https://github.com/ElChurros/AudioRooms' target='_blank' rel='noopener noreferrer'><i className="fab fa-github" /> Github</a>.</p>
        </Section>
      </SectionContext.Provider>
      <SectionContext.Provider value='projects.eip'>
        <Section period location>
          <p><FormattedMessage id={'description'}/></p>
          <ul>
            {[...Array(3)].map((v, i) => <li key={i}><FormattedMessage id={`feature${i + 1}`}/></li>)}
          </ul>
          <img alt="Jammee-Studio screenshot" className={styles.screenshot} src={studio} />
          <p><FormattedMessage id={'stack'} /></p>
          <ul>
            {[...Array(7)].map((v, i) => <li key={i}><FormattedMessage id={`tech${i + 1}`} /></li>)}
          </ul>
        </Section>
      </SectionContext.Provider>
    </>
  );
}

export default Projects;