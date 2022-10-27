import Sidebar from 'components/Sidebar/Sidebar';
import './desktopMenu.css'

type T_Props = {}

const DesktopMenu = (props: T_Props) => {

    return (
        <div className='desktop-menu'>
            <Sidebar />
        </div>
    )
}

export default DesktopMenu