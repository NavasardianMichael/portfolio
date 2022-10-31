
import { SOCIALS } from 'constants/socials';
import './socials.css'

export default function Socials () {
  return (
    <div className='socials hoverable'>
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
