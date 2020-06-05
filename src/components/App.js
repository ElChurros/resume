import React from 'react';

import Header from './Header';
import Resume from './Resume';
import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sections = ['Resume', 'Projects']
    this.state = {
      currentSection: 'Resume',
    }
  }

  setSection = (s) => {
    this.setState({currentSection: s});
  }

  render() {
    return (
      <>
        <div className={styles.bgImage}></div>
        <div className={styles.content}>
          <Header sections={this.sections} currentSection={this.state.currentSection} setSection={this.setSection}/>
          {this.state.currentSection === 'Resume' && <Resume />}
        </div>
      </>
    );
  }
}

export default App;
