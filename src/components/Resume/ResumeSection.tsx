import './resume.css'

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
    <div className='resume-section'>
        <h3 className='resume-secion-title'>{title}</h3>
        <div className='resume-section-content'>
            {
                children.map(section => {
                    return (
                        <div key={section.id} className='resume-section-item'>
                            <h4 className='resume-section-item-title'>{section.title}</h4>
                            {
                                !!section.activityStart &&
                                <span className='resume-section-item-activity-duration'>
                                    {`${section.activityStart} - ${section.activityEnd}`}
                                </span>
                            }
                            <p className='resume-section-initial-info'>
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