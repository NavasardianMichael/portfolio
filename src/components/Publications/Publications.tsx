import { Button, Card, CardActions, CardContent } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ContentSection from "components/Content/ContentSection";
import './publications.css';

type T_Props = {}

const Publications: React.FC<T_Props> = (props) => {
  return (
    <ContentSection id='publications' title='Publications'>
        <Card sx={{width: '30%'}}>
            <CardContent>
                <h3>The role of efficiency in the economic growth quality generation and manifestation processes</h3>
                <p>
                    «Регион и мир» · May 25, 2022
                </p>
                <Button startIcon={<OpenInNewIcon />} size='small'>
                    See Publication
                </Button >
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    </ContentSection>
  );
};

export default Publications;
