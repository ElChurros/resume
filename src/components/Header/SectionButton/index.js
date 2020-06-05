import React from 'react';

import styles from './SectionButton.module.css';

export function SectionButton({children, held, className, ...props}) {
    className = held ? `${className} ${styles.held}` : className;
    return (
        <button className={className} {...props}>
            {children}
        </button>
    )
}

export default SectionButton;