import { useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PublicIcon from '@mui/icons-material/Public';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { PaletteMode } from '@mui/material';
import { IconButton } from '@mui/material';
import { MobileMenuContext } from 'Providers/MobileMenu';
import { ThemeActionsContext } from 'Providers/Theme';
import mobileMenuStyles from 'components/Menu/MobileMenu/mobileMenu.module.css';
import { useThemeMode } from 'hooks/useThemeMode';
import { useTranslations } from 'hooks/useTranslations';
import styles from './panel.module.css';
import { LocaleContext } from 'Providers/Locale';

const Panel = () => {
  const isLightMode = useThemeMode() === 'light';
  const setTheme = useContext(ThemeActionsContext);
  const { toggleLocale } = useContext(LocaleContext)
  const { lightMode, darkMode, toggleLanguage } = useTranslations();

  const [mobileMenuOpened, setMobileMenuOpened] = useContext(MobileMenuContext);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setTheme(e.currentTarget.name as PaletteMode);
  };

  return (
    <div className={styles.panel}>
      {isLightMode ? (
        <IconButton title={lightMode} name="dark" onClick={handleClick}>
          <DarkModeIcon color="secondary" />
        </IconButton>
      ) : (
        <IconButton title={darkMode} name="light" onClick={handleClick} color="secondary">
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
      <IconButton title={toggleLanguage} onClick={toggleLocale}>
        <PublicIcon color={isLightMode ? 'secondary' : 'primary'} />
      </IconButton>
    </div>
  );
};

export default Panel;
