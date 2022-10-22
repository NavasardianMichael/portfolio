import { FC } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import './navbar.css'
import { SECTIONS } from 'constants/sections';

type T_Props = {}

const Navbar: FC<T_Props> = (props) => {
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
