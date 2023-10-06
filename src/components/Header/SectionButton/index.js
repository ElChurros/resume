import { useNavigate } from 'react-router-dom'
import FormattedMessage from '../../FormattedMessage'
import SectionContext from '../../../context/sectionContext'
import styles from './SectionButton.module.css'

const LinkButton = ({ to, onClick, children, ...props }) => {
  const navigate = useNavigate()

  return <button
    {...props}
    onClick={(event) => {
      onClick && onClick(event)
      navigate(to)
    }}>
    {children}
  </button>
}

const SectionButton = ({ tab, held, className, ...props }) => {
  className = held ? `${className} ${styles.held}` : className;
  return <SectionContext.Provider value='header'>
    <LinkButton className={className} to={`/${tab}`} {...props}>
      <FormattedMessage id={`${tab}`} />
    </LinkButton>
  </SectionContext.Provider>
}

export default SectionButton