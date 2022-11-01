import { useCallback } from 'react';
import commonStyles from 'assets/styles/commons.module.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import ContentSection from 'components/Content/ContentSection';
import { CONTRIBUTIONS } from 'constants/contributions';

type Props = {};

export default function Contributions({}: Props) {
  const handleClick = useCallback((link: string) => {
    window.open(link, '_blank');
  }, []);

  return (
    <ContentSection id="contributions" title="Contributions">
      <div className={commonStyles["cards-wrapper"]}>
        {CONTRIBUTIONS.map(({ id, name, desc, img, link }) => {
          return (
            <Card key={id} className={commonStyles.card}>
              <CardActionArea onClick={() => handleClick(link)}>
                <CardMedia component="img" height="120" sx={{ objectFit: 'contain' }} image={img} alt={name} />
                <CardContent>
                  <Typography gutterBottom fontWeight={600} variant="body1">
                    {name}
                  </Typography>
                  <Typography
                    sx={{
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                    }}
                    variant="body2"
                  >
                    {desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </ContentSection>
  );
}
