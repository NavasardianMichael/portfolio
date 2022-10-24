import './resume.css'

type T_ResumeSectionProps = {
    title: string
    children: ({
        id: string
        title: string
        info: string
        markup: JSX.Element | JSX.Element[]
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
                        <div className='resume-section-item'>
                            <h4 className='resume-section-item-title'>{section.title}</h4>
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