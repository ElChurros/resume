import React from 'react';
import {observer} from 'mobx-react';

import ImageLoader from './ImageLoader'
import Header from './Header';
import Profile from './Profile';
import Skills from './Skills';
import Training from './Training';
import Experiences from './Experiences';
import Projects from './Projects';
import langProvider from '../components/langProvider';
import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
    this.mainRef = React.createRef();
    this.sections = ['Skills', 'Training', 'Experiences', 'Projects'];
    this.state = {
      currentSection: 'Skills',
    }
  }

  componentDidMount() {
    console.log(navigator.language)
    console.log(navigator.languages)
  }

  setSection = (s) => {
    this.setState({currentSection: s});
    this.contentRef.current.scrollTop = 0;
    this.mainRef.current.scrollTop = 0;
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
        <div className={styles.content} ref={this.contentRef}>
        <Header sections={this.sections} currentSection={this.state.currentSection} setSection={this.setSection} />
          <aside>
            <Profile/>
          </aside>
          <main ref={this.mainRef}>
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

export default langProvider(observer(App));
