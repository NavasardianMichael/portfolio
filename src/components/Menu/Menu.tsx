import DesktopMenu from './DesktopMenu/DesktopMenu';
import MobileMenu from './MobileMenu/MobileMenu';
import styles from './menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <MobileMenu />
      <DesktopMenu />
    </div>
  );
};

export default Menu;
