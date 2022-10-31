import { useContext } from 'react'
import { PaletteMode, useTheme } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { IconButton } from '@mui/material';
import { ThemeActionsContext } from 'Providers/Theme';
import CloseIcon from '@mui/icons-material/Close';
import { MobileMenuContext } from 'Providers/MobileMenu';
import './panel.css'

type T_Props = {}

const Panel: React.FC<T_Props> = () => {

    const themeContext = useTheme()
    const setTheme = useContext(ThemeActionsContext)
    const isLightMode = themeContext.palette.mode === 'light'

    const [ mobileMenuOpened, setMobileMenuOpened ] = useContext(MobileMenuContext)

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        setTheme(e.currentTarget.name as PaletteMode)
    }

    return (
        <div className='panel'>
            {
                isLightMode ?
                <IconButton name='dark' onClick={handleClick}>
                    <DarkModeIcon color='secondary' />
                </IconButton> :
                <IconButton name='light' onClick={handleClick} color='secondary'>
                    <WbSunnyIcon color='secondary' />
                </IconButton>
            }
            {
                mobileMenuOpened &&
                <IconButton onClick={() => setMobileMenuOpened(false)} className='mobile-menu-btn mobile-menu-close-btn'>
                    <CloseIcon color={isLightMode ? 'secondary' : 'primary'} />
                </IconButton>
            }
        </div>
    );
};

export default Panel;
