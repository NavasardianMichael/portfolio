import { FC } from 'react';
import avatar from 'assets/images/main-avatar.jpeg'
import { useTheme } from "@mui/material";
import ContentSection from 'components/Content/ContentSection';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { THEMES } from 'constants/theme';
import { ABOUT_ITEMS } from 'constants/about';
import './about.css'

const About: FC = () => {

  const themeContext = useTheme()

  return (
    <ContentSection id='about' title='About'>
        <p className='bio'>
          I am an experienced software front-end engineer with a passion for designing and implementing innovative programs that promote the efficiency and effectiveness of society. Well-versed in modern technology and writing code to create systems that are scalable, reliable, and user-friendly. Supporter of servant leadership, have an ability to motivate and educate. Strategic thinker and innovative creator aimed at developing software that is customized to highlight organizational core competencies, and further their success. Ph.D. student with academic experience, who tries to make the world a better place.
        </p>
        <div className='about-main'>
          <div className='about-main-avatar'>
            <img src={avatar} />
          </div>
          <div className='about-main-content'>
            <h3 className='about-main-content-title'>
              Front-End Engineer
            </h3>
            <div className='about-main-content-items'>
              {
                ABOUT_ITEMS.map(item => {
                  return (
                    <div key={item.key} className='about-main-content-item'>
                      <span>
                        <ArrowForwardIosIcon sx={{color: THEMES[themeContext.palette.mode].contrast}} fontSize='small' />
                      </span>
                      <span className='about-main-content-item-type'>
                        {item.key}:
                      </span>
                      <span>
                        {item.value}
                      </span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
    </ContentSection>
  );
};

export default About;
