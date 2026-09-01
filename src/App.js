import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

/**
 * @typedef {Object} AppProps
 * @property {Object} [props] - Optional props for the App component (currently unused).
 */

/**
 * Root application component that renders the complete page layout.
 * This component serves as the main container for the application, orchestrating
 * the composition of all major UI sections including navigation, hero content,
 * feature highlights, customer testimonials, and the footer.
 *
 * @component
 * @param {AppProps} [_props] - Optional props for future extensibility.
 * @returns {React.JSX.Element} The rendered React component representing the entire application.
 */
function App(_props) {
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