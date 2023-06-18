import ContentSection from 'components/Content/ContentSection';

import styles from './contact.module.css';
import { combineClassNames } from 'helpers/utils';
import { useState } from 'react';

type Props = {};

const CONTACT_FORM_FIELD_NAMES = {
  name: 'name',
  email: 'email',
  subject: 'subject',
  message: 'message',
} as const

const CONTACT_FORM_TEMPLATE: {
  id: typeof CONTACT_FORM_FIELD_NAMES[keyof typeof CONTACT_FORM_FIELD_NAMES],
  isTextArea: boolean,
  label: string,
  className: string,
  placeholder: string,
}[] = [
  {
    id: CONTACT_FORM_FIELD_NAMES.name,
    isTextArea: false,
    label: 'Your Name',
    className: combineClassNames(styles.field, styles.name),
    placeholder: 'Enter Your Name'
  },
  {
    id: CONTACT_FORM_FIELD_NAMES.email,
    isTextArea: false,
    label: 'Your Email',
    className: combineClassNames(styles.field, styles.email),
    placeholder: 'Enter Your Email'
  },
  {
    id: CONTACT_FORM_FIELD_NAMES.subject,
    isTextArea: false,
    label: 'Subject',
    className: combineClassNames(styles.field, styles.subject),
    placeholder: 'Enter Email Subject'
  },
  {
    id: CONTACT_FORM_FIELD_NAMES.message,
    isTextArea: true,
    label: 'Message',
    className: combineClassNames(styles.field, styles.textarea, styles.message),
    placeholder: 'Enter Email Message'
  },
]

export default function Contact({}: Props) {

  const [ values, setValues ] = useState<{ [key in keyof typeof CONTACT_FORM_FIELD_NAMES]: string }>({
    name: '',
    email: '',
    message: '',
    subject: ''
  })

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { value, name } = e.currentTarget;
    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <ContentSection id="contact" title="Contact">
      <form className={styles.form}>
        <div className={styles.fields}>
          {
            CONTACT_FORM_TEMPLATE.map(({ id, isTextArea, label, className, placeholder }) => {
              return (
                <div key={id} className={className}>
                  <label>{label}</label>
                  {
                    isTextArea ?
                    <textarea
                      name={id}
                      placeholder={placeholder}
                      value={values[id]}
                      onChange={handleChange}
                      rows={6}
                    /> :
                    <input
                      name={id}
                      placeholder={placeholder}
                      value={values[id]}
                      onChange={handleChange}
                    />
                  }
                </div>
              )
            })
          }
        </div>
        <button type='submit' value='Send Message' />
      </form>
    </ContentSection>
  );
}
