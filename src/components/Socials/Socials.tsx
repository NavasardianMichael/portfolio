
import { SOCIALS } from 'constants/socials';
import commonStyles from 'assets/styles/commons.module.css';
import styles from './socials.module.css'

export default function Socials () {
  return (
    <div className={`${styles['socials']} ${commonStyles['hoverable']}`}>
        {
          SOCIALS.map(({ id, href, icon: Icon, download }) => {
            return (
              <a 
                key={id} 
                href={href} 
                title={id}
                download={!!download} 
                target='_blank'
              >
                <Icon color='secondary' />
              </a>
            )
          })
        }
    </div>
  )
}
