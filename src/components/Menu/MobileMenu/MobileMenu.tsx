import { useContext } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileMenuContext } from 'Providers/MobileMenu';
import Sidebar from 'components/Sidebar/Sidebar';
import sidebarStyles from 'components/Sidebar/sidebar.module.css';
import styles from './mobileMenu.module.css'

const MobileMenu = () => {

    const [ mobileMenuOpened, setMobileMenuOpened ] = useContext(MobileMenuContext)

    const openMobileMenu = () => setMobileMenuOpened(true)

    return (
        <div className={styles['mobile-menu']}>
            <Sidebar className={sidebarStyles[mobileMenuOpened ? 'opened' : 'closed']} />
            {
                !mobileMenuOpened &&
                <IconButton onClick={openMobileMenu} className={`${styles['mobile-menu-btn']} ${styles['mobile-menu-open-btn']}`}>
                    <MenuIcon color='primary' />
                </IconButton>
            }
        </div>
    )
}

export default MobileMenu