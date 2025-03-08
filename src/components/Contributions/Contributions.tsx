import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { selectContributions } from 'store/resume/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import ContentSection from 'components/Content/ContentSection'
import commonStyles from 'styles/commons.module.css'

export default function Contributions() {
  const contributions = useAppSelector(selectContributions)

  return (
    <ContentSection id="contributions" title="Contributions">
      <div className={commonStyles['cards-wrapper']}>
        {contributions.map(({ title, description, assetUrl, imageUrl }) => {
          return (
            <Card key={title} className={commonStyles.card}>
              <CardActionArea href={assetUrl} target="_blank">
                <CardMedia component="img" height="120" sx={{ objectFit: 'contain' }} image={imageUrl} alt={title} />
                <CardContent>
                  <Typography gutterBottom fontWeight={600} variant="body1">
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                    }}
                    variant="body2"
                  >
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        })}
      </div>
    </ContentSection>
  )
}
