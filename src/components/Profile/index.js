import { Link } from 'react-router-dom'
import FormattedMessage from '../FormattedMessage'
import SectionContext from '../../context/sectionContext'
import profile from '../../assets/profile.png'
import styles from './Profile.module.css'

const Profile = () => {
  return <SectionContext.Provider value='profile'>
    <div className={styles.imagemask}>
      <img alt="Profile" src={profile}></img>
    </div>
    <h2 className={styles.name}>Arthur Lemaire</h2>
    <h3><FormattedMessage id={'title'} /></h3>
    <p className={styles.description}>
      <FormattedMessage id={'description'} />
      <Link to='/projects'><FormattedMessage id={'description.projectlink'} /></Link>.
    </p>
    {/* <p className={styles.looking}>
        <FormattedMessage id='looking'/>
      </p> */}
    <div className={styles.contacts}>
      <a href={'https://www.linkedin.com/in/arthur-lemaire-526269142/'} target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin'></i> LinkedIn</a>
      <a href={'https://github.com/ElChurros'} target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i> Github</a>
      <a href={'mailto:arthur.lemaire@epitech.eu'} target='_blank' rel='noopener noreferrer'><i className="fas fa-envelope"></i> Mail</a>
      <a href={'tel:+33630700515'}><i className="fas fa-phone-alt" target='_blank' rel='noopener noreferrer'></i>{' '}<FormattedMessage id={'phone'} /></a>
    </div>
  </SectionContext.Provider>
}

export default Profile