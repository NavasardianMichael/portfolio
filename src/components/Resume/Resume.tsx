import ContentSection from "components/Content/ContentSection";
import ResumeSection from "./ResumeSection";
import Summary from "./Sections/Summary";
import './resume.css'

type T_Props = {}

const Resume: React.FC<T_Props> = (props) => {
  return (
    <ContentSection id='resume' title='Resume'>
        <ResumeSection title='Summary'>
            {
                [
                    {
                        id: 'short-bio',
                        title: 'Michael Navasardyan',
                        info: 'Experienced Front-End Engineer',
                        markup: <Summary />
                    }
                ]
            }
        </ResumeSection>
    </ContentSection>
  );
};

export default Resume;
