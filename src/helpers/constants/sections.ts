import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'
import HomeIcon from '@mui/icons-material/Home'
import PsychologyIcon from '@mui/icons-material/Psychology'
import SourceIcon from '@mui/icons-material/Source'

export const SECTIONS = [
  {
    id: 'home',
    name: 'Home',
    Icon: HomeIcon,
  },
  {
    id: 'about',
    name: 'About',
    Icon: AssignmentIndIcon,
  },
  {
    id: 'skills',
    name: 'Skills',
    Icon: PsychologyIcon,
  },
  {
    id: 'resume',
    name: 'Resume',
    Icon: SourceIcon,
  },
  {
    id: 'publications',
    name: 'Publications',
    Icon: CollectionsBookmarkIcon,
  },
  {
    id: 'contributions',
    name: 'Contributions',
    Icon: DashboardCustomizeIcon,
  },
]
