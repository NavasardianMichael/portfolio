import { combineClassNames } from "helpers/utils";
import styles from './contact.module.css';

export const CONTACT_FORM_FIELD_NAMES = {
  name: 'name',
  email: 'email',
  message: 'message',
} as const

export const CONTACT_FORM_TEMPLATE: {
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
    id: CONTACT_FORM_FIELD_NAMES.message,
    isTextArea: true,
    label: 'Message',
    className: combineClassNames(styles.field, styles.textarea, styles.message),
    placeholder: 'Enter Email Message'
  },
]