import Avatar from 'components/Avatar/Avatar'
import { Footer } from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import Socials from 'components/Socials/Socials'
import './sidebar.css'

type T_Props = {
  closePortal?: () => void
}

export default function Sidebar ({ closePortal }: T_Props) {
  return (
    <div className='sidebar'>
      <Avatar />
      <Socials />
      <Navbar closePortal={closePortal} />
      <Footer />
    </div>
  )
}
