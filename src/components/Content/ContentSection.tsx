import styles from './content.module.css';

type T_Props = {
  id: string;
  title: string;
  children: JSX.Element | JSX.Element[];
};

const ContentSection = ({ children, id, title }: T_Props) => {
  return (
    <div id={id} className={styles['content-section']}>
      <h1 className={styles['content-section-title contrast-dark-title']}>{title}</h1>
      {children}
    </div>
  );
};

export default ContentSection;
