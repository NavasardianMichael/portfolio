import { FC } from 'react';
import { SECTIONS } from 'constants/sections';
import './navbar.css'

type T_Props = {
    closePortal?: () => void
}

const Navbar: FC<T_Props> = ({ closePortal }) => {

    const handleClick = () => {
        closePortal?.()
    }

  return (
    <div className='navbar hoverable'>
        {
            SECTIONS.map(section => {
                const Icon = section.icon
                return (
                    <a onClick={handleClick} key={section.id} href={`#${section.id}`}>
                        <Icon color='secondary' /> {section.name}
                    </a>
                )
            })
        }
    </div>
  );
};

export default Navbar;
