import React from 'react';
import Context from '../../../context';

import styles from './LanguageSelector.module.css';

export class LanguageSelector extends React.Component {
  static contextType = Context;
  
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <button className={`${styles.other} ${this.state.open ? styles.show : ''}`} onClick={() => {this.context.toggleLocale(); this.setState({open: !this.state.open})}}><img width={'25px'} src={process.env.PUBLIC_URL + this.context.locale === 'en' ? '/french-flag.png' : '/uk-flag.png'}></img></button>
        <button className={`${styles.current}`} onClick={() => this.setState({open: !this.state.open})}><img width={'25px'} src={process.env.PUBLIC_URL + this.context.locale === 'fr' ? '/french-flag.png' : '/uk-flag.png'}></img></button>
      </div>
    );
  }
}

export default LanguageSelector;