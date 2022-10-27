import { FC } from 'react';
import { SECTIONS } from 'constants/sections';
import './navbar.css'

type T_Props = {}

const Navbar: FC<T_Props> = () => {

  return (
    <div className='navbar hoverable'>
        {
            SECTIONS.map(section => {
                const Icon = section.icon
                return (
                    <a key={section.id} href={`#${section.id}`}>
                        <Icon color='secondary' /> {section.name}
                    </a>
                )
            })
        }
    </div>
  );
};

export default Navbar;
