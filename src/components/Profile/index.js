import React from 'react';

import styles from './Profile.module.css';

export function Profile(props) {
  return (
    <>
      <div className={styles.imagemask}>
        <img src={process.env.PUBLIC_URL + '/profile.png'}></img>
      </div>
      <div className={styles.contacts}>
        <a href={'https://www.linkedin.com/in/arthur-lemaire-526269142/'}><i className='fab fa-linkedin'></i> LinkedIn</a>
        <a href={'https://github.com/ElChurros'}><i className="fab fa-github-square"></i> Github</a>
        <a href={'mailto:arthur.lemaire@epitech.eu'}><i className="fas fa-envelope"></i> Mail</a>
        <a href={'tel:+33630700515'}><i className="fas fa-phone-alt"></i> Phone</a>
      </div>
      <p className={styles.description}>
        Web and mobile <br/>developer by day, music producer by night.
      </p>
    </>
  );
}

export default Profile;