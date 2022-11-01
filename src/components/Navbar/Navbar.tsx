import { FC, useCallback, useContext } from 'react';
import { MobileMenuContext } from 'Providers/MobileMenu';
import commonStyles from 'assets/styles/commons.module.css';
import { SECTIONS } from 'constants/sections';
import styles from './navbar.module.css';

const Navbar: FC = () => {
  const [_, setMobileMenuOpened] = useContext(MobileMenuContext);
  const closeMobileMenu = useCallback(() => setMobileMenuOpened(false), []);

  const handleClick = () => {
    closeMobileMenu?.();
  };

  return (
    <div className={`${styles['navbar']} ${commonStyles['hoverable']}`}>
      {SECTIONS.map((section) => {
        const Icon = section.icon;
        return (
          <a onClick={handleClick} key={section.id} href={`#${section.id}`}>
            <Icon /> {section.name}
          </a>
        );
      })}
    </div>
  );
};

export default Navbar;
