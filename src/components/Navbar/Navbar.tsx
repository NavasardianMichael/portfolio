import { SECTIONS } from 'helpers/constants/sections';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { FC, useCallback } from 'react';
import { setAppOptions } from 'store/app/slice';
import commonStyles from 'styles/commons.module.css';
import styles from './navbar.module.css';

const Navbar: FC = () => {
  const dispatch = useAppDispatch()

  const closeMobileMenu = useCallback(() => dispatch(setAppOptions({isMobileMenuOpened: false})), [dispatch]);

  const handleClick = () => {
    closeMobileMenu?.();
  };

  return (
    <div className={`${styles['navbar']} ${commonStyles['hoverable']}`}>
      {SECTIONS.map(({ id, name, Icon }) => {
        return (
          <a onClick={handleClick} key={id} href={`#${id}`}>
            <Icon /> {name}
          </a>
        );
      })}
    </div>
  );
};

export default Navbar;
