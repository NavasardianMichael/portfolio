import { FC } from 'react'
import { selectEducation, selectExperience } from 'store/resume/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import ContentSection from 'components/Content/ContentSection'
import RoadMap from 'components/RoadMap/RoadMap'
import styles from './resume.module.css'

const Resume: FC = () => {
  const experience = useAppSelector(selectExperience)
  const education = useAppSelector(selectEducation)

  return (
    <ContentSection id="resume" title="Resume">
      <div className={styles['resume-wrapper']}>
        <RoadMap list={experience} title="Experience" />
        <RoadMap list={education} title="Education" />
      </div>
    </ContentSection>
  )
}

export default Resume
