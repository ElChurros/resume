import React from 'react';

import ImageLoader from './ImageLoader'
import Header from './Header';
import Profile from './Profile';
import Skills from './Skills';
import Training from './Training';
import Experiences from './Experiences';
import Projects from './Projects';
import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sections = ['Skills', 'Training', 'Experiences', 'Projects'];
    this.state = {
      currentSection: 'Projects',
    }
  }

  setSection = (s) => {
    this.setState({currentSection: s});
  }

  render() {
    const bgstyle = `${styles.bgImage} ${
      this.state.currentSection === 'Skills' ? styles.skillsbg
      : this.state.currentSection === 'Training' ? styles.trainingbg
      : this.state.currentSection === 'Experiences' ? styles.experiencebg
      : styles.projectsbg}`;
    return (
      <>
        <ImageLoader/>
        <div className={`${bgstyle}`}></div>
        <div className={styles.content}>
        <Header sections={this.sections} currentSection={this.state.currentSection} setSection={this.setSection} />
          <aside>
            <Profile/>
          </aside>
          <main>
            {this.state.currentSection === 'Skills' && <Skills/>}
            {this.state.currentSection === 'Training' && <Training/>}
            {this.state.currentSection === 'Experiences' && <Experiences/>}
            {this.state.currentSection === 'Projects' && <Projects/>}
          </main>
        </div>
      </>
    );
  }
}

export default App;
