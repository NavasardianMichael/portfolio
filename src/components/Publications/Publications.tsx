import { FC } from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import { selectPublications } from 'store/resume/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import ContentSection from 'components/Content/ContentSection'
import commonStyles from 'styles/commons.module.css'

const Publications: FC = () => {
  const publications = useAppSelector(selectPublications)

  return (
    <ContentSection id="publications" title="Publications">
      <div className={commonStyles['cards-wrapper']}>
        {publications.map(({ date, journal, title, url }) => {
          return (
            <Card key={title} className={commonStyles.card}>
              <CardActionArea href={url} target="_blank">
                <CardContent>
                  <Typography gutterBottom fontWeight={600} variant="body1">
                    {title}
                  </Typography>
                  <Typography variant="body2">{`"${journal}" · ${date}`}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        })}
      </div>
    </ContentSection>
  )
}

export default Publications
