import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom'
import styles from './SectionButton.module.css';

const LinkButton = ({ to, onClick, children, ...props }) => {
  const navigate = useNavigate()

  return (
    <button
      {...props} // `children` is just another prop!
      onClick={(event) => {
        onClick && onClick(event)
        navigate(to)
      }}>
      {children}
    </button>
  )
};

const SectionButton = ({tab, held, className, ...props}) => {
  className = held ? `${className} ${styles.held}` : className;
  return (
    <LinkButton className={className} to={`/${tab}`} {...props}>
      <FormattedMessage id={`header.${tab}`} />
    </LinkButton>
  )
}

export default SectionButton;