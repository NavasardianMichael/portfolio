import ContentSection from "components/Content/ContentSection";
import './resume.css'
import ResumeSection from "./ResumeSection";

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
                        markup: (
                            <ul style={{marginBottom: 0}}>
                                <li>
                                    Eghishe Tadevosyan 5, Yerevan, Armenia
                                </li>
                                <li>
                                    +37498751615
                                </li>
                                <li>
                                    navasardianmichael@gmail.com
                                </li>
                            </ul>
                        )
                    },
                    {
                        id: 'short-bio1',
                        title: 'Michael Navasardyan',
                        markup: (
                            <ul style={{marginTop: 0}}>
                                <li>
                                    Eghishe Tadevosyan 5, Yerevan, Armenia
                                </li>
                                <li>
                                    +37498751615
                                </li>
                                <li>
                                    navasardianmichael@gmail.com
                                </li>
                            </ul>
                        )
                    }
                ]
            }
        </ResumeSection>
    </ContentSection>
  );
};

export default Resume;
