import BgAvatar from 'components/BgAvatar/BgAvatar';
import Content from 'components/Content/Content';
import Menu from 'components/Menu/Menu';
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Menu />
      <Content />
      <BgAvatar />
    </div>
  );
}

export default App;
