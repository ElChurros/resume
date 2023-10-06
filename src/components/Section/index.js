import FormattedMessage from '../FormattedMessage'
import SectionContext from '../../context/sectionContext'
import styles from './Section.module.css'

const Section = ({ prefix, companyLink, titleLink, location, period, description, children, ...props }) => {
  return <SectionContext.Provider value={prefix}>
    <div className={styles.container} {...props}>
      <h1 className={styles.title}>
        {titleLink ? <a href={titleLink} target='_blank' rel='noopener noreferrer'><FormattedMessage id={companyLink ? 'jobtitle' : ''} /></a>
          : <FormattedMessage id={companyLink ? 'jobtitle' : ''} />}
      </h1>
      {companyLink && <h2><a href={companyLink} target='_blank' rel='noopener noreferrer'><FormattedMessage id={''} /></a></h2>}
      {(location || period) && <p className={styles.complement}><span>
        {period && <span className={styles.period}><FormattedMessage id={`period`} /></span>}
        {location && <span className={styles.location}><FormattedMessage id={`location`} /></span>}
      </span></p>}
      <div className={styles.content}>
        {description && <p><FormattedMessage id={`description`} /></p>}
        {children}
      </div>
    </div>
  </SectionContext.Provider>
}

export default Section