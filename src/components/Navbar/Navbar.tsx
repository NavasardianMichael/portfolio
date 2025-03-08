import commonStyles from 'styles/commons.module.css';
import { ICONS_BY_SECTION_NAME } from 'helpers/constants/sections';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { FC, useCallback } from 'react';
import { setAppOptions } from 'store/app/slice';
import { selectSectionNames } from 'store/resume/selectors';
import styles from './navbar.module.css';

const Navbar: FC = () => {
  const dispatch = useAppDispatch()
  const sectionNames = useAppSelector(selectSectionNames)

  const closeMobileMenu = useCallback(() => dispatch(setAppOptions({isMobileMenuOpened: false})), [dispatch]);

  const handleClick = () => {
    closeMobileMenu?.();
  };

  return (
    <div className={`${styles['navbar']} ${commonStyles['hoverable']}`}>
      {sectionNames.map((name) => {
        const Icon = ICONS_BY_SECTION_NAME[name as keyof typeof ICONS_BY_SECTION_NAME];
        return (
          <a onClick={handleClick} key={name} href={`#${name}`}>
            <Icon /> {name}
          </a>
        );
      })}
    </div>
  );
};

export default Navbar;
