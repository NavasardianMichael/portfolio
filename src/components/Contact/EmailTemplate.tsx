import { FC } from 'react'
import { CONTACT_FORM_FIELD_NAMES } from './constants'

type T_Props = {
    values: { [key in keyof typeof CONTACT_FORM_FIELD_NAMES]: string }
}

const style: React.CSSProperties = {
    width: '100%',
    maxWidth: '400px',
    display: 'block',
    margin: 'auto'
}

export const EmailTemplate: FC<T_Props> = ({values}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Email from Portfolio Visitor</h1>
            <img src='https://www.pngplay.com/wp-content/uploads/13/Email-Marketing-PNG-Images-HD.png' style={style} alt='contact-illustration' />
            {
                Object.values(CONTACT_FORM_FIELD_NAMES).map(fieldName => {
                    return (
                        <h3 key={fieldName}>
                            {fieldName.toUpperCase()}: {values[fieldName]}
                        </h3>
                    )
                })
            }
        </div>
    )
}