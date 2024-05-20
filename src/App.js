import './App.css';
import Cursor from './components/animated cursor';
import Header from './components/header';
import Landing from './components/landing';
import Projects from './components/projects';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <Cursor/>
      <Header />
      <Landing />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
