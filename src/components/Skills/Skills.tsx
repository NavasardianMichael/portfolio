import { FC } from 'react'
import DoneIcon from '@mui/icons-material/Done'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { selectUIMode } from 'store/app/selectors'
import { selectSkills } from 'store/resume/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import { THEMES } from 'helpers/constants/theme'
import ContentSection from 'components/Content/ContentSection'
import styles from './skills.module.css'

const Skills: FC = () => {
  const skills = useAppSelector(selectSkills)
  const mode = useAppSelector(selectUIMode)

  return (
    <ContentSection id="skills" title="Skills">
      <List className={styles['skills-list']}>
        {skills.map((skill) => {
          return (
            <ListItemButton key={skill} className={styles.skill}>
              <ListItemIcon>
                <DoneIcon sx={{ color: THEMES[mode].contrast }} />
              </ListItemIcon>
              <ListItemText primary={skill} />
            </ListItemButton>
          )
        })}
      </List>
    </ContentSection>
  )
}

export default Skills
