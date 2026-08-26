import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

/**
 * Root application component that renders the complete page layout.
 * Includes the navigation bar, hero section, feature highlights, testimonials, and footer.
 * @component
 * @returns {JSX.Element} The rendered React component representing the entire application.
 */
function App() {
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
