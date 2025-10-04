import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Achieve Your Dream <span className="text-blue-600">IELTS Score</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of successful students who achieved their target band score with our expert guidance, personalized training, and AI-powered practice tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
                View Courses
              </button>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-blue-600">10,000+</p>
                <p className="text-gray-600">Students Trained</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">8.5</p>
                <p className="text-gray-600">Avg Band Score</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">98%</p>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
                alt="Students studying" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;