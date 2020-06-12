import React, { useContext } from 'react';
import {withRouter} from 'react-router-dom';

import Context from '../../context';
import SectionButton from './SectionButton';
import LanguageSelector from './LanguageSelector';
import styles from './Header.module.css'

export function Header(props) {
  const context = useContext(Context);
  const { history, location, match, staticContext, to, onClick, hidden, ...rest } = props;
  const tabIndex = context.tabs.indexOf(location.pathname.slice(1));
  return (
    <nav className={`${styles.nav} ${hidden ? styles.hidden : ''}`} {...rest}>
      {context.tabs.map((t, i) =>
        <React.Fragment key={t}>
          <SectionButton held={location.pathname === `/${t}`} tab={t}></SectionButton>
            {tabIndex !== i && tabIndex !== i + 1 && <div className={styles.sep} />}
        </React.Fragment>
      )}
      <LanguageSelector/>
    </nav>
  );
}

export default withRouter(Header);