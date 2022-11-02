import { FC } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ContentSection from 'components/Content/ContentSection';
import { SKILLS } from 'constants/skills';
import { THEMES } from 'constants/theme';
import { useThemeMode } from 'hooks/useThemeMode';
import styles from './skills.module.css';
import { E_TRANSLATIONS } from 'constants/locale';

const Skills: FC = () => {
  const mode = useThemeMode();

  return (
    <ContentSection id={E_TRANSLATIONS.skills}>
      <List className={styles['skills-list']}>
        {SKILLS.map((skill) => {
          return (
            <ListItemButton key={skill} className={styles.skill}>
              <ListItemIcon>
                <DoneIcon sx={{ color: THEMES[mode].contrast }} />
              </ListItemIcon>
              <ListItemText primary={skill} />
            </ListItemButton>
          );
        })}
      </List>
    </ContentSection>
  );
};

export default Skills;
