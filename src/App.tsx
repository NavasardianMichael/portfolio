import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import 'assets/styles/commons.css'
import Content from 'components/Content/Content';
import BgAvatar from 'components/BgAvatar/BgAvatar';
import Menu from 'components/Menu/Menu';

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
