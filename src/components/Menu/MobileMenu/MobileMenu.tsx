import { useContext } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileMenuContext } from 'Providers/MobileMenu';
import Sidebar from 'components/Sidebar/Sidebar';
import './mobileMenu.css'

const MobileMenu = () => {

    const [ mobileMenuOpened, setMobileMenuOpened ] = useContext(MobileMenuContext)

    const openMobileMenu = () => setMobileMenuOpened(true)

    return (
        <div className='mobile-menu'>
            <Sidebar className={mobileMenuOpened ? 'opened' : 'closed'} />
            {
                !mobileMenuOpened &&
                <IconButton onClick={openMobileMenu} className='mobile-menu-btn mobile-menu-open-btn'>
                    <MenuIcon color='primary' />
                </IconButton>
            }
        </div>
    )
}

export default MobileMenu