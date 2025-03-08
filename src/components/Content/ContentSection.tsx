import { FC, PropsWithChildren } from 'react'
import styles from './content.module.css'

type T_Props = {
  id: string
  title: string
}

const ContentSection: FC<PropsWithChildren<T_Props>> = ({ children, id, title }) => {
  return (
    <div id={id} className={styles['content-section']}>
      <h1 className={styles['content-section-title contrast-dark-title']}>{title}</h1>
      {children}
    </div>
  )
}

export default ContentSection
