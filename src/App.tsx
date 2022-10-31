import Content from 'components/Content/Content';
import BgAvatar from 'components/BgAvatar/BgAvatar';
import Menu from 'components/Menu/Menu';
import './App.css';
import 'assets/styles/commons.css'

function App() {
  return (
    <div className="app">
      <Menu />
      <Content />
      <BgAvatar />
    </div>
  );
}

export default App;
