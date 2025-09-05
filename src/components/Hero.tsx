import React from 'react';
import { ArrowRight, Users, Target, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Unlock Your
              <span className="text-blue-600 block">Leadership Potential</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your organization with expert leadership coaching and talent development strategies. 
              25 years of proven experience in accelerating business and people performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              {/* Professional image placeholder */}
              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-blue-600" size={48} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Mridula Sankhyayan</h4>
                <p className="text-sm text-gray-600">Founder & Lead Consultant</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Target className="text-blue-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-900">Leadership Coaching</h3>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="text-green-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-900">Talent Development</h3>
                </div>
                <div className="text-center col-span-2">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="text-purple-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-900">Business Performance</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;