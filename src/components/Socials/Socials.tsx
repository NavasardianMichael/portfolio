
import { SOCIALS } from 'constants/socials';
import './socials.css'

type T_Props = {}

export default function Socials (props: T_Props) {
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
