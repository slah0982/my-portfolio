import './App.css';
import Cursor from './components/animated cursor';
import Header from './components/header';
import Landing from './components/landing';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <Cursor/>
      <Header />
      <Landing />
      <Skills />
      <div style={{height: '500px'}}></div>
    </div>
  );
}

export default App;
