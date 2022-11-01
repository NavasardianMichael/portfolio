import styles from './resume.module.css'

export type T_ResumeSectionProps = {
    title: string
    children: ({
        id: string
        title: string
        info: string
        activityStart?: string 
        activityEnd?: string 
        markup?: JSX.Element
    })[]
}

const ResumeSection = ({ title, children }: T_ResumeSectionProps) => {
  return (
    <div className={styles['resume-section']}>
        <h3 className={styles['resume-secion-title']}>{title}</h3>
        <div className={styles['resume-section-content']}>
            {
                children.map(section => {
                    return (
                        <div key={section.id} className={styles['resume-section-item']}>
                            <h4 className={styles['resume-section-item-title']}>{section.title}</h4>
                            {
                                !!section.activityStart &&
                                <span className={styles['resume-section-item-activity-duration']}>
                                    {`${section.activityStart} - ${section.activityEnd}`}
                                </span>
                            }
                            <p className={styles['resume-section-initial-info']}>
                                {section.info}
                            </p>
                            {section.markup}
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ResumeSection