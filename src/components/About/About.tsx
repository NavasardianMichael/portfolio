import { FC } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { selectUIMode } from 'store/app/selectors'
import { selectResume } from 'store/resume/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import { THEMES } from 'helpers/constants/theme'
import ContentSection from 'components/Content/ContentSection'
import styles from './about.module.css'

const About: FC = () => {
  const mode = useAppSelector(selectUIMode)
  const { primaryImageUrl, bio, specialization, aboutItems } = useAppSelector(selectResume)

  return (
    <ContentSection id="about" title="About">
      <p className="bio">{bio}</p>
      <div className={styles['about-main']}>
        <div className={styles['about-main-avatar']}>
          <img src={primaryImageUrl} alt="avatar" />
        </div>
        <div className={styles['about-main-content']}>
          <h3 className={styles['about-main-content-title']}>{specialization}</h3>
          <div className={styles['about-main-content-items']}>
            {aboutItems.map(({ name, value }) => {
              return (
                <div key={name} className={styles['about-main-content-item']}>
                  <span>
                    <ArrowForwardIosIcon
                      sx={{
                        color: THEMES[mode].contrast,
                      }}
                      fontSize="small"
                    />
                  </span>
                  <span className={styles['about-main-content-item-type']}>{name}:</span>
                  <span>{value}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </ContentSection>
  )
}

export default About
