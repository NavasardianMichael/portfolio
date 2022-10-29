import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { IconButton } from '@mui/material';
import './panel.css'

type T_Props = {}

const Panel: React.FC<T_Props> = (props) => {
    return (
        <div className='panel'>
            {/* <IconButton color='secondary'>
                <DarkModeIcon color='secondary' />
            </IconButton> */}
            <IconButton color='secondary'>
                <WbSunnyIcon color='secondary' />
            </IconButton>
        </div>
    );
};

export default Panel;
