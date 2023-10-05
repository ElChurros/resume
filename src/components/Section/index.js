import { FormattedMessage } from 'react-intl';
import styles from './Section.module.css';

const Section = ({ id, companyLink, titleLink, location, period, description, children, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      <h1 className={styles.title}>
        {titleLink ? <a href={titleLink} target='_blank' rel='noopener noreferrer'><FormattedMessage id={companyLink ? `${id}.jobtitle` : id} /></a>
          : <FormattedMessage id={companyLink ? `${id}.jobtitle` : id} />}
      </h1>
      {companyLink && <h2><a href={companyLink} target='_blank' rel='noopener noreferrer'><FormattedMessage id={id} /></a></h2>}
      {(location || period) && <p className={styles.complement}><span>
        {period && <span className={styles.period}><FormattedMessage id={`${id}.period`} /></span>}
        {location && <span className={styles.location}><FormattedMessage id={`${id}.location`} /></span>}
      </span></p>}
      <div className={styles.content}>
        {description && <p><FormattedMessage id={`${id}.description`} /></p>}
        {children}
      </div>
    </div>
  );
}

export default Section;