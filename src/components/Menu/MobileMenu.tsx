import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Modal } from '@mui/material'
import { useState } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';

type T_Props = {}

const MobileMenu = (props: T_Props) => {

    const [opened, setOpenedStatus] = useState(false)

    return (
        <div className='mobile-menu'>
            <Sidebar />
            <div className='mobile-menu-open-trigger' />
        </div>
    )
}

export default MobileMenu
                // <IconButton color='secondary' onClick={openPortal} className='mobile-menu-btn mobile-menu-open-btn'>
                //     <MenuIcon />
                // </IconButton>