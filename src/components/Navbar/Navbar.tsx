import { FC, useCallback, useContext } from 'react';
import { MobileMenuContext } from 'Providers/MobileMenu';
import commonStyles from 'assets/styles/commons.module.css';
import styles from './navbar.module.css';
import { useSectionsTemplate } from 'hooks/useSectionsTemplate';

const Navbar: FC = () => {
  const [_, setMobileMenuOpened] = useContext(MobileMenuContext);
  const closeMobileMenu = useCallback(() => setMobileMenuOpened(false), []);
  const sections = useSectionsTemplate()

  const handleClick = () => {
    closeMobileMenu?.();
  };

  return (
    <div className={`${styles['navbar']} ${commonStyles['hoverable']}`}>
      {sections.map((section) => {
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
