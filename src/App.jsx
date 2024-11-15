import React from 'react'
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="bg-black">
      <Home />

      <div id='About' className="bg-gray-950">
        <About />
      </div>
      <div id='Skills'>
        <Skills />
      </div>
      <div id='Project' className="bg-gray-950">
        <Project />
      </div>
      <div id='Contact'>
        <Contact />
      </div>
      {/* footer section */}
      <div>
        <Footer/>
        </div>
    </div>
  );
}

export default App;