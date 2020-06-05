import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
    this.sections = ['Skills', 'Training', 'Experience', 'Projects'];
    this.state = {
      currentSection: 'Skills',
    }
  }

  setSection = (s) => {
    this.setState({currentSection: s});
  }

  render() {
    return (
      <Router>
        <div className={styles.bgImage}></div>
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
      </Router>
    );
  }
}

export default App;