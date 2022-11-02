import { FC, useCallback } from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import commonStyles from 'assets/styles/commons.module.css';
import ContentSection from 'components/Content/ContentSection';
import { PUBLICATIONS } from 'constants/publications';
import { E_TRANSLATIONS } from 'constants/locale';

const Publications: FC = () => {
  const handleClick = useCallback((link: string) => {
    window.open(link, '_blank');
  }, []);

  return (
    <ContentSection id={E_TRANSLATIONS.publications}>
      <div className={commonStyles["cards-wrapper"]}>
        {PUBLICATIONS.map((pub) => {
          return (
            <Card key={pub.id} className={commonStyles.card} onClick={() => handleClick(pub.link)}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom fontWeight={600} variant="body1">
                    {pub.title}
                  </Typography>
                  <Typography variant="body2">{`"${pub.journal}" · ${pub.date}`}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </ContentSection>
  );
};

export default Publications;
