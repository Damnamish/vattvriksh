import React from 'react';
import { Linkedin, Mail, Phone, Instagram, Youtube } from 'lucide-react';

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
                <a href="https://www.youtube.com/c/MridulaSankhyayan" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="https://www.instagram.com/mridz0304/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://in.pinterest.com/msankhyayan/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c6.628 0 12-5.372 12-12S18.628 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.803 1.604.803 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.003-4.625 4.137 0 .695.366 1.56.95 1.836.096-.149.057-.411.016-.565-.051-.19-.312-1.29-.312-1.29-.102-.42-.011-.93.474-.93.381 0 .556.233.556.545 0 .438-.278 1.236-.278 1.236-.463 1.98.525 2.126.525 2.126 1.846.042 2.166-2.372 2.166-2.372.38-1.768-.076-2.686-.076-2.686-.317-.708-.76-.652-.76-.652-.51.058-.699.629-.699.629-.654 1.669.711 2.354.711 2.354 1.635.297 2.694-1.669 2.694-1.669.297-.42.516-1.002.516-1.002.193-.735-.233-1.002-.233-1.002-.466-.268-.699.629-.699.629-.654 1.669.711 2.354.711 2.354z"/>
                  </svg>
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