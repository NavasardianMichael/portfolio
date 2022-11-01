import { FC } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import avatar from 'assets/images/fake-avatar.jpeg';
import ContentSection from 'components/Content/ContentSection';
import { ABOUT_ITEMS } from 'constants/about';
import { THEMES } from 'constants/theme';
import { useThemeMode } from 'hooks/useThemeMode';
import styles from './about.module.css';

const About: FC = () => {
  const mode = useThemeMode();

  return (
    <ContentSection id="about" title="About">
      <p className="bio">
        I am an experienced software front-end engineer with a passion for designing and implementing innovative
        programs that promote the efficiency and effectiveness of society. Well-versed in modern technology and writing
        code to create systems that are scalable, reliable, and user-friendly. Supporter of servant leadership, have an
        ability to motivate and educate. Strategic thinker and innovative creator aimed at developing software that is
        customized to highlight organizational core competencies, and further their success. Ph.D. student with academic
        experience, who tries to make the world a better place.
      </p>
      <div className={styles['about-main']}>
        <div className={styles['about-main-avatar']}>
          <img src={avatar} />
        </div>
        <div className={styles['about-main-content']}>
          <h3 className={styles['about-main-content-title']}>Front-End Engineer</h3>
          <div className={styles['about-main-content-items']}>
            {ABOUT_ITEMS.map((item) => {
              return (
                <div key={item.key} className={styles['about-main-content-item']}>
                  <span>
                    <ArrowForwardIosIcon
                      sx={{
                        color: THEMES[mode].contrast,
                      }}
                      fontSize="small"
                    />
                  </span>
                  <span className={styles['about-main-content-item-type']}>{item.key}:</span>
                  <span>{item.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ContentSection>
  );
};

export default About;
