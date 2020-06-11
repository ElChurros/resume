import React from 'react';
import Context from '../../../context';

import styles from './LanguageSelector.module.css';

export class LanguageSelector extends React.Component {
  static contextType = Context;
  
  constructor(props) {
    super(props);
    this.endRef = React.createRef();
    this.state = {
      open: false,
    }
  }

  componentDidUpdate() {
    if (this.state.open)
      this.endRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div className={styles.container}>
        <button onClick={() => {this.setState({open: !this.state.open})}}>
        <img
            alt={this.context.locale === 'fr' ? 'French flag' : 'UK flag'}
            width={'25px'}
            src={process.env.PUBLIC_URL + this.context.locale === 'fr' ? '/french-flag.png' : '/uk-flag.png'}
          />
        </button>
        {this.state.open && <button onClick={() => {this.context.locale = this.context.locale === 'en' ? 'fr' : 'en'; this.setState({open: !this.state.open})}}>
          <img
            alt={this.context.locale === 'en' ? 'French flag' : 'UK flag'}
            width={'25px'}
            src={process.env.PUBLIC_URL + this.context.locale === 'en' ? '/french-flag.png' : '/uk-flag.png'}
          />
        </button>}
        <div ref={this.endRef}/>
      </div>
    );
  }
}

export default LanguageSelector;