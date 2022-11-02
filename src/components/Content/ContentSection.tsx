import { E_TRANSLATIONS } from 'constants/locale';
import { useTranslations } from 'hooks/useTranslations';
import styles from './content.module.css';

type T_Props = {
  id: string;
  children: JSX.Element | JSX.Element[];
};

const ContentSection = ({ children, id }: T_Props) => {
  const text = useTranslations()[id as E_TRANSLATIONS]
  return (
    <div id={id} className={styles['content-section']}>
      <h1 className={styles['content-section-title contrast-dark-title']}>{text}</h1>
      {children}
    </div>
  );
};

export default ContentSection;
