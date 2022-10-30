import { FC } from 'react';
import ContentSection from 'components/Content/ContentSection';
import DoneIcon from '@mui/icons-material/Done';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SKILLS } from 'constants/skills';
import { THEMES } from 'constants/theme';
import { useTheme } from "@mui/material";
import './skills.css'

type T_Props = {}

const Skills: FC<T_Props> = (props) => {

    const themeContext = useTheme()

  return (
    <ContentSection id='skills' title='Skills'>
        <List className='skills-list'>
            {
                SKILLS.map(skill => {
                    return (
                        <ListItemButton key={skill} className='skill'>
                            <ListItemIcon>
                                <DoneIcon sx={{ color: THEMES[themeContext.palette.mode].contrast }} />
                            </ListItemIcon>
                            <ListItemText primary={skill} />
                        </ListItemButton>
                    )
                })
            }
        </List>
    </ContentSection>
  );
};

export default Skills;