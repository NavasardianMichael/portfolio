import ContentSection from "components/Content/ContentSection";
import { RESUME_EXPERIENCE_TEMPLATE, RESUME_TEMPLATE_LEFT } from "constants/resume";
import ResumeSection from "./ResumeSection";
import './resume.css';

type T_Props = {}

const Resume: React.FC<T_Props> = (props) => {
  return (
    <ContentSection id='resume' title='Resume'>
        <div className='resume-wrapper'>
            <div className='resume-left-part'>
                {
                    RESUME_TEMPLATE_LEFT.map(section => {
                        return (
                            <ResumeSection key={section.title} title={section.title}>
                                {section.children}
                            </ResumeSection>
                        )
                    })
                }
            </div>
            <div className='resume-right-part'>
                <ResumeSection title='Professional Experience'>
                    {RESUME_EXPERIENCE_TEMPLATE}
                </ResumeSection>
            </div>
        </div>
    </ContentSection>
  );
};

export default Resume;
