import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import './index.css';
import About from './components/About';
import Tech from './components/Tech';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Tech />
      <Project />
      <Footer />
      
    </div>
  );
}

export default App;
