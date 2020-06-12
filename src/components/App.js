import React from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

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
    this.prevScrollTop = 0;
    this.state = {
      hideNavBar: false,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    if (e.target.scrollTop > this.prevScrollTop && this.state.hideNavBar === false)
      this.setState({hideNavBar: true});
    else if (e.target.scrollTop < this.prevScrollTop && this.state.hideNavBar === true)
      this.setState({hideNavBar: false});
    this.prevScrollTop = e.target.scrollTop;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== '/' && prevProps.location.pathname !== this.props.location.pathname) {
      this.mainRef.current.scrollTop = 0;
      this.mainRef.current.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => this.setState({hideNavBar: true}), 1000);
    }
  }

  render() {
    const bgStyle = `${styles.bgImage} ${
      this.props.location.pathname === '/skills' ? styles.skillsbg
      : this.props.location.pathname === '/experiences' ? styles.experiencesbg
      : this.props.location.pathname === '/projects' ? styles.projectsbg
      : styles.trainingbg}`;
    return (
      <>
        <ImageLoader/>
        <div className={bgStyle}/>
        <div className={styles.content} ref={this.contentRef}>
          <Header hidden={this.state.hideNavBar}/>
          <aside>
            <Profile/>
          </aside>
          <main ref={this.mainRef}>
            <Switch>
              <Route path="/skills">
                <Skills/>
              </Route>
              <Route path="/experiences">
                <Experiences/>
              </Route>
              <Route path="/projects">
                <Projects/>
              </Route>
              <Route path="/training">
                <Training/>
              </Route>
              <Redirect exact from="/" to="/skills" />
            </Switch>
          </main>
        </div>
      </>
    );
  }
}

export default langProvider(observer(withRouter(App)));
