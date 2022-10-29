import { Button, Card, CardActionArea, CardContent } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ContentSection from "components/Content/ContentSection";
import { PUBLICATIONS } from "constants/publications";
import './publications.css';

type T_Props = {}

const Publications: React.FC<T_Props> = (props) => {

    const handleClick = (link: string) => {
        window.open(link, "_blank")
    }

  return (
    <ContentSection id='publications' title='Publications'>
        <div className='publications-wrapper'>
            {
                PUBLICATIONS.map(pub => {
                    return (
                        <Card key={pub.id} className='publication-card' onClick={() => handleClick(pub.link)}>
                            <CardActionArea>
                                <CardContent>
                                    <h3>
                                        {pub.title}
                                    </h3>
                                    <p>
                                        {`"${pub.journal}" · ${pub.date}`}
                                    </p>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })
            }
        </div>
    </ContentSection>
  );
};

export default Publications;
