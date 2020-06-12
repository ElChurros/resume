import React from 'react';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom'

import styles from './SectionButton.module.css';

const LinkButton = withRouter((props) => {
    const {
      history,
      location,
      match,
      staticContext,
      to,
      onClick,
      ...rest
    } = props
    return (
      <button
        {...rest} // `children` is just another prop!
        onClick={(event) => {
          onClick && onClick(event)
          history.push(to)
        }}
      />
    )
});

export function SectionButton({tab, held, className, ...props}) {
    className = held ? `${className} ${styles.held}` : className;
    return (
        <LinkButton className={className} to={`/${tab}`} {...props}>
            <FormattedMessage id={`header.${tab}`}/>
        </LinkButton>
    )
}

export default SectionButton;