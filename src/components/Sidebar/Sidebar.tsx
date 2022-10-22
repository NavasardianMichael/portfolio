import Avatar from 'components/Avatar/Avatar'
import { Footer } from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import Socials from 'components/Socials/Socials'
import './sidebar.css'

type T_Props = {}

export default function Sidebar (props: T_Props) {
  return (
    <div className='sidebar'>
        <Avatar />
        <Socials />
        <Navbar />
        <Footer />
    </div>
  )
}
