import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import 'assets/styles/commons.css'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div>
        Content
      </div>
    </div>
  );
}

export default App;
