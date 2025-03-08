import { FC } from 'react'
import About from 'components/About/About'
import Contributions from 'components/Contributions/Contributions'
import Home from 'components/Home/Home'
import Publications from 'components/Publications/Publications'
import Resume from 'components/Resume/Resume'
import Skills from 'components/Skills/Skills'
import styles from './content.module.css'

const Content: FC = () => {
  return (
    <div className={styles.content}>
      <Home />
      <About />
      <Skills />
      <Resume />
      <Publications />
      <Contributions />
    </div>
  )
}

export default Content
