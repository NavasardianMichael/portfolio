import ContentSection from "components/Content/ContentSection";
import './resume.css'

type T_Props = {
    title: string
    children: ({
        id: string
        title: string
        markup: JSX.Element
    })[]
}

const ResumeSection: React.FC<T_Props> = ({ title, children }) => {
  return (
    <div className='resume-section'>
        <h3 className='resume-secion-title'>{title}</h3>
        <div className='resume-section-content'>
            {
                children.map(section => {
                    return (
                        <div className='resume-section-item'>
                            <h4 className='resume-section-item-title'>{section.title}</h4>
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