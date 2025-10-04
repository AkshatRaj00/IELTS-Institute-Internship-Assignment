import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">IELTS Pro</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition">Home</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Enroll Now</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block text-gray-700 hover:bg-blue-50 px-3 py-2 rounded">Home</a>
            <a href="#features" className="block text-gray-700 hover:bg-blue-50 px-3 py-2 rounded">Features</a>
            <a href="#testimonials" className="block text-gray-700 hover:bg-blue-50 px-3 py-2 rounded">Testimonials</a>
            <a href="#contact" className="block text-gray-700 hover:bg-blue-50 px-3 py-2 rounded">Contact</a>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-2">Enroll Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;