import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import ImageLoader from './ImageLoader'
import Header from './Header'
import Profile from './Profile'
import Skills from './Skills'
import Training from './Training'
import Experiences from './Experiences'
import Projects from './Projects'
import langProvider from '../components/langProvider'
import styles from './App.module.css'

const App = () => {
  const contentRef = useRef()
  const mainRef = useRef()
  const prevScrollTop = useRef(0)
  const [hideNavBar, setHideNavBar] = useState(false)
  const location = useLocation()
  const prevLocation = useRef(location)

  const handleScroll = useCallback((e) => {
    if (e.target.scrollTop > prevScrollTop.current)
      setHideNavBar(true)
    else if (e.target.scrollTop < prevScrollTop.current)
      setHideNavBar(false)
    prevScrollTop.current = e.target.scrollTop
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, true)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    if (!prevLocation.current) {
      prevLocation.current = location
      return
    }
    if (prevLocation.current.pathname !== '/' && prevLocation.current.pathname !== location.pathname) {
      mainRef.current.scrollTop = 0
      mainRef.current.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => setHideNavBar(true), 1000)
    }
    prevLocation.current = location
  }, [location])

  const bgStyle = useMemo(() => {
    return `${styles.bgImage} ${location.pathname === '/skills'
      ? styles.skillsbg
      : location.pathname === '/experiences'
        ? styles.experiencesbg
        : location.pathname === '/projects'
          ? styles.projectsbg
          : styles.trainingbg}`
  }, [location])

  return <>
    <ImageLoader />
    <div className={bgStyle} />
    <div className={styles.content} ref={contentRef}>
      <Header hidden={hideNavBar} />
      <aside>
        <Profile />
      </aside>
      <main ref={mainRef}>
        <Routes>
          <Route path="/skills" element={<Skills />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/training" element={<Training />} />
          <Route path='/' index element={<Navigate to='/skills' replace />} />
        </Routes>
      </main>
    </div>
  </>
}

export default langProvider(App)
