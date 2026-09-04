import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

/**
 * @typedef {Object} AppProps
 * // Currently no props are defined; this typedef exists for future extensibility.
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

// Runtime prop type validation – currently no props are expected.
App.propTypes = {};
App.defaultProps = {};

export default App;
