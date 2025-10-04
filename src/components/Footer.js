import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">IELTS Pro</h3>
            <p className="text-gray-400">Your trusted partner in IELTS preparation. Achieve your dreams with us.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-blue-400 transition">Courses</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#materials" className="text-gray-400 hover:text-blue-400 transition">Study Materials</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#practice" className="text-gray-400 hover:text-blue-400 transition">Free Practice</a></li>
              <li><a href="#faqs" className="text-gray-400 hover:text-blue-400 transition">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-400">info@ieltspro.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-400">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 IELTS Pro. All rights reserved. Made with ❤️ for IELTS aspirants.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;