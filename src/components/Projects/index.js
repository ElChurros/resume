import FormattedMessage from '../FormattedMessage'
import Section from '../Section'
import studio from '../../assets/studio.png'
import audiorooms from '../../assets/audiorooms.png'
import styles from './Projects.module.css'

const Projects = () => {
  return <>
    <Section prefix='projects.audiorooms' period location titleLink="https://audiorooms.onrender.com">
      <p><FormattedMessage id="description" /></p>
      <ul>
        {[...Array(4)].map((v, i) => <li key={i}><FormattedMessage id={`feature${i + 1}`} /></li>)}
      </ul>
      <img alt="AudioRooms screenshot" className={styles.screenshot} src={audiorooms} />
      <p><FormattedMessage id="stack" /></p>
      <ul>
        {[...Array(5)].map((v, i) => <li key={i}><FormattedMessage id={`tech${i + 1}`} /></li>)}
      </ul>
      <p><FormattedMessage id="sourcecode" /><a href='https://github.com/ElChurros/AudioRooms' target='_blank' rel='noopener noreferrer'><i className="fab fa-github" /> Github</a>.</p>
    </Section>
    <Section prefix='projects.eip' period location>
      <p><FormattedMessage id={'description'} /></p>
      <ul>
        {[...Array(3)].map((v, i) => <li key={i}><FormattedMessage id={`feature${i + 1}`} /></li>)}
      </ul>
      <img alt="Jammee-Studio screenshot" className={styles.screenshot} src={studio} />
      <p><FormattedMessage id={'stack'} /></p>
      <ul>
        {[...Array(7)].map((v, i) => <li key={i}><FormattedMessage id={`tech${i + 1}`} /></li>)}
      </ul>
    </Section>
  </>
}

export default Projects