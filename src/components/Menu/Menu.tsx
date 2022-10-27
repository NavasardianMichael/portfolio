import DesktopMenu from './DesktopMenu/DesktopMenu';
import './menu.css'
import MobileMenu from './MobileMenu/MobileMenu';

type T_Props = {}

const Menu = (props: T_Props) => {
  return (
    <div className='menu'>
      <MobileMenu />
      <DesktopMenu />
    </div>
  )
}

export default Menu