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

  const [ errors, setErrors ] = useState<{ [key in keyof typeof CONTACT_FORM_FIELD_NAMES]: boolean }>({
    name: false,
    email: false,
    message: false,
    subject: false
  })

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { value } = e.currentTarget;
    const name = e.currentTarget.name as typeof CONTACT_FORM_FIELD_NAMES[keyof typeof CONTACT_FORM_FIELD_NAMES];

    if(errors[name]) setErrors(prev => ({...prev, [name]: false}));

    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit:  React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    
    const currentErrors = Object.values(CONTACT_FORM_FIELD_NAMES).map(fieldName => {
      if(values[fieldName]) return false;
      setErrors(prev => ({...prev, [fieldName]: true}))
      return true 
    })
    if(currentErrors.includes(true)) return;

    console.log('SUBMITTED')
  }

  return (
    <ContentSection id="contact" title="Contact">
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fields}>
          {
            CONTACT_FORM_TEMPLATE.map(({ id, isTextArea, label, className, placeholder }) => {
              return (
                <div key={id} className={combineClassNames(errors[id] ? styles.error : undefined, className) }>
                  <label>{label} *</label>
                  {
                    isTextArea ?
                    <textarea
                      rows={6}
                      name={id}
                      placeholder={placeholder}
                      value={values[id]}
                      onChange={handleChange}
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
        <button type='submit'>
          Send Message
        </button>
      </form>
    </ContentSection>
  );
}
