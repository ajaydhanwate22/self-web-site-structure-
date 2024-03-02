import './App.css';
import About from './Component/About';
import Blog from './Component/Blog';
import Navbar from './Component/Navbar';
import Service from './Component/Service';
import Skills from './Component/Skills';
import Projects from './Component/projects';

function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <Service/>
    <Skills/>
    <Projects/>
    <Blog/>
    </>
  );
}

export default App;
