import { useContext, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import SectionButton from './SectionButton';
import LanguageSelector from './LanguageSelector';
import Context from '../../context/languageContext';
import styles from './Header.module.css'

const Header = ({hidden, ...props}) => {
  const context = useContext(Context);
  const location = useLocation()
  const tabIndex = context.tabs.indexOf(location.pathname.slice(1));
  return (
    <div className={`${styles.header} ${hidden ? styles.hidden : ''}`} {...props} >
      <nav>
        {context.tabs.map((t, i) =>
          <Fragment key={t}>
            <SectionButton held={location.pathname === `/${t}`} tab={t}></SectionButton>
              {tabIndex !== i && tabIndex !== i + 1 && <div className={styles.sep} />}
          </Fragment>
        )}
      </nav>
      <LanguageSelector/>
    </div>
  );
}

export default Header;