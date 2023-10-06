import { useContext, useState, useEffect, useRef } from 'react';
import Context from '../../../context/languageContext';
import frenchFlag from '../../../assets/french-flag.png'
import ukFlag from '../../../assets/uk-flag.png'
import styles from './LanguageSelector.module.css';

const LanguageSelector = () => {
  const context = useContext(Context)
  const endRef = useRef()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open)
      endRef.current.scrollIntoView({behavior: 'smooth'})
  }, [open])

  return <div className={styles.container}>
    {open && <button onClick={() => {context.locale = context.locale === 'en' ? 'fr' : 'en'; setOpen(prev => !prev)}}>
      <img
        alt={context.locale === 'en' ? 'French flag' : 'UK flag'}
        width={'25px'}
        src={context.locale === 'en' ? frenchFlag : ukFlag}
      />
    </button>}
    <button onClick={() => setOpen(prev => !prev)}>
    <img
        alt={context.locale === 'fr' ? 'French flag' : 'UK flag'}
        width={'25px'}
        src={context.locale === 'fr' ? frenchFlag : ukFlag}
      />
    </button>
    <div ref={endRef}/>
  </div>
}

export default LanguageSelector;