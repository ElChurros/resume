import React from 'react';

import styles from './SectionButton.module.css';

export function SectionButton({title, held, className, ...props}) {
    className = held ? `${className} ${styles.held}` : className;
    return (
        <button className={className} {...props}>
            {title}
        </button>
    )
}

export default SectionButton;