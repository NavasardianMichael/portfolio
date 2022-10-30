import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Sidebar from 'components/Sidebar/Sidebar';
import { useState } from 'react';
import { useTheme } from "@mui/material";
import './mobileMenu.css'

type T_Props = {}

const MobileMenu = (props: T_Props) => {

    const themeContext = useTheme()
    const colorByTheme = themeContext.palette.mode === 'light' ? 'secondary' : 'primary'
    const [opened, setOpenedStatus] = useState(false)

    const openPortal = () => setOpenedStatus(true)
    const closePortal = () => setOpenedStatus(false)

    return (
        <div className='mobile-menu'>
            <Sidebar className={opened ? 'opened' : 'closed'} closePortal={closePortal} />
            {
                opened &&
                <IconButton onClick={closePortal} className='mobile-menu-btn mobile-menu-close-btn'>
                    <CloseIcon color={colorByTheme} />
                </IconButton>
            }
            {
                !opened &&
                <IconButton onClick={openPortal} className='mobile-menu-btn mobile-menu-open-btn'>
                    <MenuIcon color='primary' />
                </IconButton>
            }
        </div>
    )
}

export default MobileMenu