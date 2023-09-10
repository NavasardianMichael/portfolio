import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import OrcidIcon from 'components/Icons/OrcidIcon';
import PdfIcon from '@mui/icons-material/PictureAsPdf';

export const SOCIALS = [
    {
        id: 'facebook',
        href: 'https://www.facebook.com/michael.navasardian/',
        icon: FacebookIcon
    },
    {
        id: 'linkedin',
        href: 'https://www.linkedin.com/in/michael-navasardyan/',
        icon: LinkedInIcon
    },
    {
        id: 'mail',
        href: 'mailto:navasardianmichael@gmail.com',
        icon: MailIcon
    },
    {
        id: 'orcid',
        href: 'https://orcid.org/0000-0002-5474-6401',
        icon: OrcidIcon
    },
    {
        id: 'phone',
        href: 'tel:+37498751615',
        icon: PhoneIcon
    },
    {
        id: 'cv',
        download: true,
        href: 'https://drive.google.com/uc?export=download&id=1qIZj6pyvWSbU5YgnJ6BpdV6FGJ4JRNr7',
        icon: PdfIcon
    },
]