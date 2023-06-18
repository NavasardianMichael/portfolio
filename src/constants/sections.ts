import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import HomeIcon from '@mui/icons-material/Home';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SourceIcon from '@mui/icons-material/Source';

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
]