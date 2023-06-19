import CircularProgress from '@mui/material/CircularProgress';
import styles from './loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loader}>
        <CircularProgress sx={{color: '#39CCCC'}} size={100} />
    </div>
  );
}
