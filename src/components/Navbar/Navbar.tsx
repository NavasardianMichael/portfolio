import { FC, useCallback, useContext } from 'react';
import { SECTIONS } from 'constants/sections';
import './navbar.css'
import { MobileMenuContext } from 'Providers/MobileMenu';

const Navbar: FC = () => {

    const [ _, setMobileMenuOpened ] = useContext(MobileMenuContext)
    const closeMobileMenu = useCallback(() => setMobileMenuOpened(false), [])

    const handleClick = () => {
        closeMobileMenu?.()
    }

  return (
    <div className='navbar hoverable'>
        {
            SECTIONS.map(section => {
                const Icon = section.icon
                return (
                    <a onClick={handleClick} key={section.id} href={`#${section.id}`}>
                        <Icon /> {section.name}
                    </a>
                )
            })
        }
    </div>
  );
};

export default Navbar;
