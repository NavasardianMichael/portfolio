import { FC, useCallback, useContext } from 'react';
import { SECTIONS } from 'constants/sections';
import './navbar.css'
import { MobileMenuContext } from 'Providers/MobileMenu';

type T_Props = {}

const Navbar: FC<T_Props> = (props: T_Props) => {

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
