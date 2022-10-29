import Avatar from 'components/Avatar/Avatar'
import { Footer } from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import Panel from 'components/Panel/Panel'
import Socials from 'components/Socials/Socials'
import './sidebar.css'

type T_Props = {
  closePortal?: () => void
  className?: string
}

export default function Sidebar ({ className, closePortal }: T_Props) {
  return (
    <div className={`sidebar ${className}`}>
      <Panel />
      <Avatar />
      <Socials />
      <Navbar closePortal={closePortal} />
      <Footer />
    </div>
  )
}
