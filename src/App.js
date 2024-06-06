import React from 'react';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Social from './Social';
import Contact from './Contact';
import Footer from './Footer';

import './style.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      {/* <Projects /> */}
      <Skills />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
