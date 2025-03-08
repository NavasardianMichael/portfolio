import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'
import { selectIsMobileMenuOpened } from 'store/app/selectors'
import { setAppOptions } from 'store/app/slice'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import Sidebar from 'components/Sidebar/Sidebar'
import sidebarStyles from 'components/Sidebar/sidebar.module.css'
import styles from './mobileMenu.module.css'

const MobileMenu = () => {
  const dispatch = useAppDispatch()
  const isMobileMenuOpened = useAppSelector(selectIsMobileMenuOpened)

  const openMobileMenu = () => dispatch(setAppOptions({ isMobileMenuOpened: true }))

  return (
    <div className={styles['mobile-menu']}>
      <Sidebar className={sidebarStyles[isMobileMenuOpened ? 'opened' : 'closed']} />
      {!isMobileMenuOpened && (
        <IconButton
          onClick={openMobileMenu}
          className={`${styles['mobile-menu-btn']} ${styles['mobile-menu-open-btn']}`}
        >
          <MenuIcon color="primary" />
        </IconButton>
      )}
    </div>
  )
}

export default MobileMenu
