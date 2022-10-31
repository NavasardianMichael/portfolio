import DesktopMenu from './DesktopMenu/DesktopMenu';
import './menu.css'
import MobileMenu from './MobileMenu/MobileMenu';

const Menu = () => {
  return (
    <div className='menu'>
      <MobileMenu />
      <DesktopMenu />
    </div>
  )
}

export default Menu