import ContentSection from 'components/Content/ContentSection';

import ReactDOMServer from 'react-dom/server';
import styles from './contact.module.css';
import { combineClassNames } from 'helpers/utils';
import { useState } from 'react';
import { sendEmail } from 'helpers/email';
import { CONTACT_FORM_FIELD_NAMES, CONTACT_FORM_TEMPLATE } from './constants';
import { EmailTemplate } from './EmailTemplate';

type Props = {};

export default function Contact({}: Props) {

  const [ values, setValues ] = useState<{ [key in keyof typeof CONTACT_FORM_FIELD_NAMES]: string }>({
    name: '',
    email: '',
    message: '',
  })

  const [ errors, setErrors ] = useState<{ [key in keyof typeof CONTACT_FORM_FIELD_NAMES]: boolean }>({
    name: false,
    email: false,
    message: false,
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

    const body = ReactDOMServer.renderToStaticMarkup(
      <EmailTemplate values={values} />
    )
    
    sendEmail(body)

    setValues({
      name: '',
      email: '',
      message: '',
    })
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
