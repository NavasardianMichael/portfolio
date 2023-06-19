import CircularProgress from '@mui/material/CircularProgress';
import styles from './loader.module.css';

type Props = {};

export default function Loader({}: Props) {
  return (
    <div className={styles.loader}>
        <CircularProgress sx={{color: '#39CCCC'}} size={100} />
    </div>
  );
}
