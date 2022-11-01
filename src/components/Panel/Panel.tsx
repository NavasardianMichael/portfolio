import { useContext } from 'react'
import { PaletteMode } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { IconButton } from '@mui/material';
import { ThemeActionsContext } from 'Providers/Theme';
import CloseIcon from '@mui/icons-material/Close';
import { MobileMenuContext } from 'Providers/MobileMenu';
import { useThemeMode } from 'hooks/useThemeMode';
import styles from './panel.module.css'
import mobileMenuStyles from 'components/Menu/MobileMenu/mobileMenu.module.css'

const Panel = () => {

    const isLightMode = useThemeMode() === 'light'
    const setTheme = useContext(ThemeActionsContext)

    const [ mobileMenuOpened, setMobileMenuOpened ] = useContext(MobileMenuContext)

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        setTheme(e.currentTarget.name as PaletteMode)
    }

    return (
        <div className={styles.panel}>
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
                <IconButton onClick={() => setMobileMenuOpened(false)} className={`${mobileMenuStyles['mobile-menu-btn']} ${mobileMenuStyles['mobile-menu-close-btn']}`}>
                    <CloseIcon color={isLightMode ? 'secondary' : 'primary'} />
                </IconButton>
            }
        </div>
    );
};

export default Panel;
