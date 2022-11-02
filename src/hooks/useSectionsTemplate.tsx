import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SourceIcon from '@mui/icons-material/Source';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { useContext, useMemo } from 'react';
import { LocaleContext } from 'Providers/Locale';
import { useTranslations } from './useTranslations';

export const useSectionsTemplate = () => {
    const { locale } = useContext(LocaleContext)
    const { home, about, skills, resume, publications, contributions } = useTranslations()
    const sections = useMemo(() => (
        [
            {
                id: 'home',
                name: home,
                icon: HomeIcon,
            },
            {
                id: 'about',
                name: about,
                icon: AssignmentIndIcon,
            },
            {
                id: 'skills',
                name: skills,
                icon: PsychologyIcon,
            },
            {
                id: 'resume',
                name: resume,
                icon: SourceIcon,
            },
            {
                id: 'publications',
                name: publications,
                icon: CollectionsBookmarkIcon,
            },
            {
                id: 'contributions',
                name: contributions,
                icon: DashboardCustomizeIcon,
            }
        ]
    ), [locale])
    return sections 
}