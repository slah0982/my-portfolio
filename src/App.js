import './App.css';
import Cursor from './components/animated cursor';
import Contact from './components/contact';
import MyDividder from './components/divider/divider';
import Footer from './components/footer';
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
      <MyDividder rotate='0deg'/>
      <Skills />
      <MyDividder/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
