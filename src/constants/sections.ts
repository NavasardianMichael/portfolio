import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SourceIcon from '@mui/icons-material/Source';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

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
    },
    {
        id: 'contributions',
        name: 'Contributions',
        icon: DashboardCustomizeIcon,
    },
    {
        id: 'contact',
        name: 'Contact',
        icon: ConnectWithoutContactIcon,
    },
]