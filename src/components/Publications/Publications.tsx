import { FC, useCallback } from 'react'
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import ContentSection from "components/Content/ContentSection";
import { PUBLICATIONS } from "constants/publications";

const Publications: FC = () => {

    const handleClick = useCallback((link: string) => {
        window.open(link, "_blank")
    }, [])

  return (
    <ContentSection id='publications' title='Publications'>
        <div className='cards-wrapper'>
            {
                PUBLICATIONS.map(pub => {
                    return (
                        <Card key={pub.id} className='card' onClick={() => handleClick(pub.link)}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom fontWeight={600} variant="body1">
                                        {pub.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {`"${pub.journal}" · ${pub.date}`}
                                    </Typography>
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
