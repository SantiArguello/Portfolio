import {Routes, Route } from 'react-router-dom';
import './App.css';
import Intro from './components/Intro/Intro';
import Header from './components/header/Header';
import About from './components/about/About.jsx';
import Educacion from './components/Educacion/Educacion';
import Proyects from './components/proyects/Proyects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Educacion />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
      
    
  );
}

export default App;