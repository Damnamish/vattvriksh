import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/Logo.jpeg" 
                alt="Vatt Vriksh Logo" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Vatt Vriksh</h3>
                <p className="text-gray-400 text-sm">Leadership Coaching & Training</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming organizations through expert leadership coaching and 
              talent development strategies with 25 years of proven experience.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Leadership Coaching</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Talent Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Performance Enhancement</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Training & Development</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <span>info@vattvriksh.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Vatt Vriksh. All rights reserved. | Founded by Mridula Sankhyayan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;