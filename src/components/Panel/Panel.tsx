import { useContext } from 'react'
import { PaletteMode, useTheme } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { IconButton } from '@mui/material';
import { ThemeActionsContext } from 'Providers/Theme';
import './panel.css'
import { E_THEME } from 'constants/theme';

type T_Props = {}

const Panel: React.FC<T_Props> = (props) => {

    const themeContext = useTheme()
    const setTheme = useContext(ThemeActionsContext)

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        setTheme(e.currentTarget.name as PaletteMode)
    }

    return (
        <div className='panel'>
            {
                themeContext.palette.mode === 'light' ?
                <IconButton name='dark' onClick={handleClick}>
                    <DarkModeIcon color='secondary' />
                </IconButton> :
                <IconButton name='light' onClick={handleClick} color='secondary'>
                    <WbSunnyIcon color='secondary' />
                </IconButton>
            }
        </div>
    );
};

export default Panel;
