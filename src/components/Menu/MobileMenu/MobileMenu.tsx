import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Modal } from '@mui/material';
import Sidebar from 'components/Sidebar/Sidebar';
import { useState } from 'react';
import Portal from 'components/Portal/Portal';
import './mobileMenu.css'

type T_Props = {}

const MobileMenu = (props: T_Props) => {

    const [opened, setOpenedStatus] = useState(false)

    const openPortal = () => setOpenedStatus(true)
    const closePortal = () => setOpenedStatus(false)

    return (
        <div className='mobile-menu'>
            <Portal opened={opened}>
                <Sidebar closePortal={closePortal} />
            </Portal>
            {
                opened ? 
                <IconButton color='secondary' onClick={closePortal} className='mobile-menu-btn mobile-menu-close-btn'>
                    <CloseIcon />
                </IconButton> :
                <IconButton color='secondary' onClick={openPortal} className='mobile-menu-btn mobile-menu-open-btn'>
                    <MenuIcon />
                </IconButton>
            }
        </div>
    )
}

export default MobileMenu