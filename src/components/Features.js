import React from 'react';
import { Mic, BookOpen, Trophy, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Mic className="w-12 h-12 text-blue-600" />,
      title: "AI Speaking Practice",
      description: "Practice speaking with our AI-powered virtual examiner. Get instant feedback on pronunciation, fluency, and grammar."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: "Mock Tests",
      description: "Take full-length mock tests that simulate the real IELTS exam environment. Track your progress with detailed analytics."
    },
    {
      icon: <Trophy className="w-12 h-12 text-blue-600" />,
      title: "Band Score Predictor",
      description: "Our AI-powered band score predictor analyzes your performance and gives you accurate predictions before the actual exam."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
      title: "Expert Mentorship",
      description: "Get personalized guidance from IELTS experts with 10+ years of experience. One-on-one sessions available."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose IELTS Pro?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge technology with proven teaching methods to help you achieve your target band score.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition border border-gray-100">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;