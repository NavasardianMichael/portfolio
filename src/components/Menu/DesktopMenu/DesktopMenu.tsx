import Sidebar from 'components/Sidebar/Sidebar';
import styles from './desktopMenu.module.css'

const DesktopMenu = () => {
    return (
        <div className={styles['desktop-menu']}>
            <Sidebar />
        </div>
    )
}

export default DesktopMenu