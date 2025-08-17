import React from 'react';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="scroll-smooth">
      <Nav />
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
