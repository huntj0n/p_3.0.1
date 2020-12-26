import React from 'react';
import './App.scss';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Competencies from './Components/Competencies/Competencies';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Projects />
      <About />
      <Competencies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
