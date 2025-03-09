import { ResumeSlice } from 'store/resume/types'
import styles from './roadMap.module.css'

type Props = {
  title: string
  list: ResumeSlice['experience']
}

const RoadMap: React.FC<Props> = ({ title, list }) => {
  return (
    <div className={styles['resume-section']}>
      <h3 className={styles['resume-secion-title']}>{title}</h3>
      <div className={styles['resume-section-content']}>
        {list.map(({ company, from, location, position, to }) => {
          return (
            <div key={`${company}-${from}-${to}`} className={styles['resume-section-item']}>
              <h4 className={styles['resume-section-item-title']}>{position}</h4>
              <span className={styles['resume-section-item-activity-duration']}>
                {`${from} - ${to}`}
              </span>
              <p className={styles['resume-section-initial-info']}>{company}</p>
              <p className={styles['resume-section-initial-info']}>{location}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RoadMap
