import React from 'react';
import {observer} from 'mobx-react';

import Context from '../../context';
import SectionButton from './SectionButton';
import LanguageSelector from './LanguageSelector';
import styles from './Header.module.css'

export class Header extends React.Component {
  static contextType = Context;
  
  constructor(props) {
    super(props);
    this.prevScrollTop = 0;
    this.state = {
      hidden: false,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    if (e.target.scrollTop > this.prevScrollTop && this.state.hidden === false)
      this.setState({hidden: true});
    else if (e.target.scrollTop < this.prevScrollTop && this.state.hidden === true)
      this.setState({hidden: false});
    this.prevScrollTop = e.target.scrollTop;
  }

  render() {
    return (
      <nav className={`${styles.nav} ${this.state.hidden ? styles.hidden : ''}`} {...this.props}>
        {this.context.tabs.map((t, i) =>
          <React.Fragment key={t}>
            <SectionButton held={this.context.tab === t} id={`header.${t}`} onClick={(e) => this.context.tab = t}></SectionButton>
            {this.context._tab !== i && this.context._tab !== i + 1 && <div className={styles.sep} />}
          </React.Fragment>
        )}
        <LanguageSelector/>
      </nav>
    );
  }
}

export default observer(Header);