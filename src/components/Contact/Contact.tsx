import ContentSection from 'components/Content/ContentSection';

import styles from './contact.module.css';

type Props = {};

export default function Contact({}: Props) {
  return (
    <ContentSection id="contact" title="Contact">
      <form className={styles.form}>
        <div className={styles.fields}>
          <div className={styles.name}>
            <label>Your Name</label>
            <input />
          </div>
          <div className={styles.email}>
            <label>Your Email</label>
            <input />
          </div>
          <div className={styles.subject}>
            <label>Subject</label>
            <input />
          </div>
          <div className={styles.message}>
            <label>Message</label>
            <textarea rows={6} />
          </div>
        </div>
        <button type='submit' value='Send Message' />
      </form>
    </ContentSection>
  );
}
