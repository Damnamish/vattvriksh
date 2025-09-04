import React from 'react';
import { Award, BookOpen, Users2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Vatt Vriksh</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded by Mridula Sankhyayan, we bring 25 years of rich professional experience 
            in executing talent management and talent development strategies for organizations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We help businesses solve their talent development needs by coaching leaders and 
              providing tools to managers to drive business and manage people effectively.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our customized talent solutions are designed to meet any organization's specific 
              needs, helping achieve results that are visible, sustainable, and impactful.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="text-blue-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900">25+ Years</h4>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="text-green-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900">Expert</h4>
                <p className="text-sm text-gray-600">Coaching</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users2 className="text-purple-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900">Proven</h4>
                <p className="text-sm text-gray-600">Results</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Our Core Belief</h4>
            <blockquote className="text-lg text-gray-700 italic leading-relaxed">
              "Talented people are the key differentiators of enduring organizations. 
              Talent Development and Engagement shows up amongst the top three priorities 
              of CEOs of leading edge organizations – Expand Business, Grow Talent and Manage Risk."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;