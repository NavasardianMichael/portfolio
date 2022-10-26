import { useState } from 'react';
import { Button, Card, CardContent, TextField } from '@mui/material'
import ContentSection from 'components/Content/ContentSection'
import { sendEmail, T_MailOptions } from 'helpers/email';
import { FIELDS } from 'constants/emails';
import './contact.css'
import { THEMES } from 'constants/theme';

type Props = {}

const Contact = (props: Props) => {

    const [options, setOptions] = useState<T_MailOptions>({
        name: '',
        mail: '',
        subject: '',
        message: '',
    })

    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
        setOptions(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmit = () => {
        // return sendEmail(options)
    }
    
    return (
        <ContentSection id='contact' title='Contact'>
            <div className='contact-wrapper'>
                <Card className='contact-card'>
                    <CardContent>
                        123
                    </CardContent>
                </Card>
                <Card className='contact-card'>
                    <CardContent>
                        <form onSubmit={handleSubmit} className='contact-form'>
                            {
                                FIELDS.map(field => {
                                    return (
                                        <TextField 
                                            required
                                            key={field.id}
                                            id={field.id}
                                            label={field.label}
                                            onChange={handleChange}
                                            value={options[field.id]} 
                                            multiline={!field.short}
                                            minRows={field.short ? 1 : 5}
                                            maxRows={field.short ? 1 : 10}
                                            className={field.fullWidth ? undefined : 'half-width'}
                                            fullWidth={field.fullWidth}
                                        />
                                    )
                                })
                            }
                            <button type='submit' className='form-submit-btn'>
                                Send
                            </button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </ContentSection>
    )
}

export default Contact