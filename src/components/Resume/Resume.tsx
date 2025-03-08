import { FC } from 'react'
import { selectEducation, selectExperience } from 'store/resume/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import { useTranslations } from 'hooks/useTranslations'
import ContentSection from 'components/Content/ContentSection'
import RoadMap from 'components/RoadMap/RoadMap'
import styles from './resume.module.css'

const Resume: FC = () => {
  const experience = useAppSelector(selectExperience)
  const education = useAppSelector(selectEducation)
  const { education: educationTitle, experience: experienceTitle } = useTranslations(['education', 'experience'])

  return (
    <ContentSection id="resume" title="Resume">
      <div className={styles['resume-wrapper']}>
        <RoadMap list={experience} title={experienceTitle ?? ''} />
        <RoadMap list={education} title={educationTitle ?? ''} />
      </div>
    </ContentSection>
  )
}

export default Resume
