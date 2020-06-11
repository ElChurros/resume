import React from 'react';
import {FormattedMessage} from 'react-intl';

import styles from './Profile.module.css';

export function Profile(props) {
  return (
    <>
      <div className={styles.imagemask}>
        <img alt="Profile" src={process.env.PUBLIC_URL + '/profile.png'}></img>
      </div>
      <h2 className={styles.name}>Arthur Lemaire</h2>
      <p className={styles.description}>
        <FormattedMessage id={'profile.description'}/>
      </p>
      <p className={styles.looking}>
        <FormattedMessage id='profile.looking'/>
      </p>
      <div className={styles.contacts}>
        <a href={'https://www.linkedin.com/in/arthur-lemaire-526269142/'} target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin'></i> LinkedIn</a>
        <a href={'https://github.com/ElChurros'} target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i> Github</a>
        <a href={'mailto:arthur.lemaire@epitech.eu'} target='_blank' rel='noopener noreferrer'><i className="fas fa-envelope"></i> Mail</a>
        <a href={'tel:+33630700515'}><i className="fas fa-phone-alt" target='_blank' rel='noopener noreferrer'></i>{' '}<FormattedMessage id={'profile.phone'}/></a>
      </div>
    </>
  );
}

export default Profile;