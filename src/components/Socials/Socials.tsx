import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import './socials.css'

type T_Props = {}

export default function Socials (props: T_Props) {
  return (
    <div className='socials hoverable'>
        <a href='https://www.facebook.com/michael.navasardian/' target='_blank'>
          <FacebookIcon color='secondary' />
        </a>
        <a href='www.linkedin.com/in/michael-navasardyan/' target='_blank'>
          <LinkedInIcon color='secondary' />
        </a>
        <a href='mailto:navasardianmichael@gmail.com' target='_blank'>
          <MailIcon color='secondary' />
        </a>
    </div>
  );
}
