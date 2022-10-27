import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SourceIcon from '@mui/icons-material/Source';
import MailIcon from '@mui/icons-material/Mail';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import PsychologyIcon from '@mui/icons-material/Psychology';

export const SECTIONS = [
    {
        id: 'home',
        name: 'Home',
        icon: HomeIcon,
    },
    {
        id: 'about',
        name: 'About',
        icon: AssignmentIndIcon,
    },
    {
        id: 'skills',
        name: 'Skills',
        icon: PsychologyIcon,
    },
    {
        id: 'resume',
        name: 'Resume',
        icon: SourceIcon,
    },
    {
        id: 'publications',
        name: 'Publications',
        icon: CollectionsBookmarkIcon,
    }
]