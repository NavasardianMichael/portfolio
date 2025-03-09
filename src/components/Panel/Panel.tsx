import CloseIcon from '@mui/icons-material/Close'
import DarkModeIcon from '@mui/icons-material/DarkMode'
// import PublicIcon from '@mui/icons-material/Public';
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { IconButton, PaletteMode } from '@mui/material'
import { selectIsLightMode, selectIsMobileMenuOpened } from 'store/app/selectors'
import { setAppOptions } from 'store/app/slice'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import mobileMenuStyles from 'components/Menu/MobileMenu/mobileMenu.module.css'
import styles from './panel.module.css'

const Panel = () => {
  const dispatch = useAppDispatch()
  const isLightMode = useAppSelector(selectIsLightMode)

  const isMobileMenuOpened = useAppSelector(selectIsMobileMenuOpened)

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(setAppOptions({ uiMode: e.currentTarget.name as PaletteMode }))
  }

  return (
    <div className={styles.panel}>
      {isLightMode ? (
        <IconButton title='Dark Mode' name="dark" onClick={handleClick}>
          <DarkModeIcon color="secondary" />
        </IconButton>
      ) : (
        <IconButton title='Light Mode' name="light" onClick={handleClick} color="secondary">
          <WbSunnyIcon color="secondary" />
        </IconButton>
      )}
      {isMobileMenuOpened && (
        <IconButton
          onClick={() => dispatch(setAppOptions({ isMobileMenuOpened: false }))}
          className={`${mobileMenuStyles['mobile-menu-btn']} ${mobileMenuStyles['mobile-menu-close-btn']}`}
        >
          <CloseIcon color={isLightMode ? 'secondary' : 'primary'} />
        </IconButton>
      )}
    </div>
  )
}

export default Panel
