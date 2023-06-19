import styles from './contact.module.css';
import CheckIcon from '@mui/icons-material/Check';

type Props = {};

export default function SuccessDialog({}: Props) {
  return (
    <div className={styles.successDialog}>
        <CheckIcon fontSize='large' />
        <h3>Your Email was successfully sent. I Will Contact You As Soon As Possible. Thank You.</h3>
    </div>
  );
}
