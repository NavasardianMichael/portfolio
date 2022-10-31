import { useCallback } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import ContentSection from "components/Content/ContentSection"
import { CONTRIBUTIONS } from 'constants/contributions';


type Props = {}

export default function Contributions({}: Props) {

    const handleClick = useCallback((link: string) => {
        window.open(link, "_blank")
    }, [])

  return (
    <ContentSection id='contributions' title='Contributions'>
        <div className='cards-wrapper'>
            {
                CONTRIBUTIONS.map(({ id, name, desc, img, link }) => {
                    return (
                        <Card key={id} className='card'>
                            <CardActionArea onClick={() => handleClick(link)}>
                                <CardMedia
                                    component="img"
                                    height="120"
                                    sx={{objectFit: 'contain'}}
                                    image={img}
                                    alt={name}
                                />
                                <CardContent>
                                <Typography gutterBottom fontWeight={600} variant="body1">
                                    {name}
                                </Typography>
                                <Typography sx={{whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}} variant="body2">
                                    {desc}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })
            }

        </div>
    </ContentSection>
  )
}