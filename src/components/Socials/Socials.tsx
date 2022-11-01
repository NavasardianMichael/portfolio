
import { SOCIALS } from 'constants/socials';
import commonStyles from 'assets/styles/commons.module.css';
import styles from './socials.module.css'

export default function Socials () {
  return (
    <div className={`${styles['socials']} ${commonStyles['hoverable']}`}>
        {
          SOCIALS.map(social => {
            const Icon = social.icon
            return (
              <a key={social.id} href={social.href} target='_blank'>
                <Icon color='secondary' />
              </a>
            )
          })
        }
    </div>
  )
}
