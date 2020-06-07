import React from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';

import Context from '../context';
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
  static contextType = Context;

  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
    this.mainRef = React.createRef();
  }

  componentDidMount() {
    this.stopReactingToTabChange = reaction(
      () => this.context.tab,
      () => {
        this.contentRef.current.scrollTop = 0;
        this.mainRef.current.scrollTop = 0;
      }
    );
  }

  componentWillUnmount() {
    this.stopReactingToTabChange();
  }

  render() {
    return (
      <>
        <ImageLoader/>
        <div className={`${styles.bgImage} ${styles.skillsbg} ${this.context.tab === 'skills' && styles.showbg}`}/>
        <div className={`${styles.bgImage} ${styles.trainingbg} ${this.context.tab === 'training' && styles.showbg}`}/>
        <div className={`${styles.bgImage} ${styles.experiencesbg} ${this.context.tab === 'experiences' && styles.showbg}`}/>
        <div className={`${styles.bgImage} ${styles.projectsbg} ${this.context.tab === 'projects' && styles.showbg}`}/>
        <div className={styles.content} ref={this.contentRef}>
        <Header/>
          <aside>
            <Profile/>
          </aside>
          <main ref={this.mainRef}>
            {this.context.tab === 'skills' && <Skills/>}
            {this.context.tab === 'training' && <Training/>}
            {this.context.tab === 'experiences' && <Experiences/>}
            {this.context.tab === 'projects' && <Projects/>}
          </main>
        </div>
      </>
    );
  }
}

export default langProvider(observer(App));
