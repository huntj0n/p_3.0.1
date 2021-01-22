import React, {useEffect, useState} from 'react';
import './App.scss';
import gsap from 'gsap';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Competencies from './Components/Competencies/Competencies';
import IntroOverlay from './Components/IntroOverlay/IntroOverlay';

const tl = gsap.timeline();
const loadingAnimation = (completeAnimation) => {
  tl.from('.line span', 1.8, {
    opacity: 0,
    y: 100,
    ease: 'power4.out',
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    }
  })
  .to('.introOverlay__section', 1.5, {
    height: 0,
    ease: 'ease.inOut',
    stagger: 0.4,
  })
  .to('.introOverlay', 0, {
    display: 'none',
    onComplete: completeAnimation
  })
}

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true)
  }

  useEffect(() => {
    loadingAnimation(completeAnimation)
  })

  return (
    <div className="app">
      <Header />

      {animationComplete === false ? <IntroOverlay /> : null}

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
