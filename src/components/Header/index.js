import React from 'react';

import SectionButton from './SectionButton';
import LanguageSelector from './LanguageSelector';
import styles from './Header.module.css'

export class Header extends React.Component {
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
    const {sections, currentSection, setSection, ...props} = this.props;
    return (
      <nav className={`${styles.nav} ${this.state.hidden ? styles.hidden : ''}`} {...props}>
        {sections.map(s =>
          <SectionButton key={s} held={currentSection === s} id={`header.${s.toLowerCase()}`} onClick={(e) => setSection(s)}></SectionButton>
        )}
        <LanguageSelector/>
      </nav>
    );
  }
}

export default Header;