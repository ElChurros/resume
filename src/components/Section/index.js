import React from 'react';

import styles from './Section.module.css';
import { FormattedMessage } from 'react-intl';

export function Section({id, companyLink, titleLink, location, period, description, children, ...props}) {
  return (
    <>
      <h1 className={styles.title}>
        {titleLink ? <a className={styles.link} href={titleLink} target='_blank'><FormattedMessage id={companyLink ? `${id}.jobtitle` : id}/></a>
          :<FormattedMessage id={companyLink ? `${id}.jobtitle` : id}/>}
      </h1>
      {companyLink && <h2><a className={styles.link} href={companyLink} target='_blank'><FormattedMessage id={id}/></a></h2>}
      {(location || period ) && <p className={styles.complement}><span>
        {period && <span className={styles.period}><FormattedMessage id={`${id}.period`}/></span>}
        {location && <span className={styles.location}><FormattedMessage id={`${id}.location`}/></span>}
        </span></p>}
      <div className={styles.content}>
        {description && <p><FormattedMessage id={`${id}.description`} /></p>}
        {children}
      </div>
    </>
  );
}

export default Section;