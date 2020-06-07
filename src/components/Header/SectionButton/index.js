import React from 'react';

import styles from './SectionButton.module.css';
import { FormattedMessage } from 'react-intl';

export function SectionButton({id, held, className, ...props}) {
    className = held ? `${className} ${styles.held}` : className;
    return (
        <button className={className} {...props}><FormattedMessage id={id}/>
        </button>
    )
}

export default SectionButton;