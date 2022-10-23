import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import 'assets/styles/commons.css'
import Content from 'components/Content/Content';
import BgAvatar from 'components/BgAvatar/BgAvatar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
      <BgAvatar />
    </div>
  );
}

export default App;
