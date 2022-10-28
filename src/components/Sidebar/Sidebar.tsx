import Avatar from 'components/Avatar/Avatar'
import { Footer } from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import Socials from 'components/Socials/Socials'
import './sidebar.css'

type T_Props = {
  closePortal?: () => void
  className?: string
}

export default function Sidebar ({ className, closePortal }: T_Props) {
  return (
    <div className={`sidebar ${className}`}>
      <Avatar />
      <Socials />
      <Navbar closePortal={closePortal} />
      <Footer />
    </div>
  )
}
