import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      score: "Band 8.5",
      image: "https://i.pravatar.cc/150?img=1",
      text: "IELTS Pro transformed my preparation. The AI speaking practice was a game-changer. I scored 8.5 in just 2 months!"
    },
    {
      name: "Rahul Verma",
      score: "Band 8.0",
      image: "https://i.pravatar.cc/150?img=3",
      text: "The mock tests were incredibly realistic. The detailed feedback helped me identify my weak areas and improve quickly."
    },
    {
      name: "Sneha Patel",
      score: "Band 9.0",
      image: "https://i.pravatar.cc/150?img=5",
      text: "Amazing mentors and excellent study material. I achieved my dream score of 9.0 in writing. Highly recommended!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our students who achieved their dream scores
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600 font-semibold">{testimonial.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;