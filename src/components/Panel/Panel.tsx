import { useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import PublicIcon from '@mui/icons-material/Public';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { PaletteMode } from '@mui/material';
import { IconButton } from '@mui/material';
import { MobileMenuContext } from 'Providers/MobileMenu';
import { ThemeActionsContext } from 'Providers/Theme';
import mobileMenuStyles from 'components/Menu/MobileMenu/mobileMenu.module.css';
import { useThemeMode } from 'hooks/useThemeMode';
import styles from './panel.module.css';
import { useTranslations } from 'hooks/useTranslations';

const Panel = () => {
  const isLightMode = useThemeMode() === 'light';
  const setTheme = useContext(ThemeActionsContext);
  const { lightMode, darkMode } = useTranslations(['lightMode', 'darkMode'])

  const [mobileMenuOpened, setMobileMenuOpened] = useContext(MobileMenuContext);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setTheme(e.currentTarget.name as PaletteMode);
  };

  return (
    <div className={styles.panel}>
      {isLightMode ? (
        <IconButton title={darkMode} name="dark" onClick={handleClick}>
          <DarkModeIcon color="secondary" />
        </IconButton>
      ) : (
        <IconButton title={lightMode} name="light" onClick={handleClick} color="secondary">
          <WbSunnyIcon color="secondary" />
        </IconButton>
      )}
      {mobileMenuOpened && (
        <IconButton
          onClick={() => setMobileMenuOpened(false)}
          className={`${mobileMenuStyles['mobile-menu-btn']} ${mobileMenuStyles['mobile-menu-close-btn']}`}
        >
          <CloseIcon color={isLightMode ? 'secondary' : 'primary'} />
        </IconButton>
      )}
      {/* <IconButton
      // onClick={() => setMobileMenuOpened(false)}
      // className={`${mobileMenuStyles['mobile-menu-btn']} ${mobileMenuStyles['mobile-menu-close-btn']}`}
      >
        <PublicIcon color={isLightMode ? 'secondary' : 'primary'} />
      </IconButton> */}
    </div>
  );
};

export default Panel;
