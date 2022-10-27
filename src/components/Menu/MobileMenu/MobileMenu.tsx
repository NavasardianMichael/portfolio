// import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from 'components/Sidebar/Sidebar';
import { useState } from 'react';
import './mobileMenu.css'

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