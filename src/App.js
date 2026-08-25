import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

/**
 * Root application component responsible for rendering the entire page layout.
 * @component
 * @returns {JSX.Element} The rendered React component.
 */
function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;