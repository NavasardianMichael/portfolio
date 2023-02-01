import Avatar from 'components/Avatar/Avatar'
import Navbar from 'components/Navbar/Navbar'
import Panel from 'components/Panel/Panel'
import Socials from 'components/Socials/Socials'
import styles from './sidebar.module.css'

type T_Props = {
  className?: string
}

export default function Sidebar ({ className }: T_Props) {
  return (
    <div className={`${styles.sidebar} ${className ? `${styles.mobile} ${className}` : styles.desktop}`}>
      <Panel />
      <Avatar />
      <Socials />
      <Navbar />
    </div>
  )
}
