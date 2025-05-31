import React from 'react';
import { Mail, Facebook, Instagram, Github } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
      
      <div className="container-custom relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <img 
              src="https://raw.githubusercontent.com/rrbhanderi05/FileHosting/refs/heads/main/Lokspire.png" 
              alt="Lokspire Logo" 
              className="h-12 w-auto filter brightness-0 invert"
            />
            <p className="text-blue-100 text-lg">
              Connecting local businesses in Amreli with their community.
            </p>
            <div className="flex space-x-6">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300">
                <Github size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-blue-100 hover:text-teal-400 transition-colors duration-300 text-lg">Home</a>
              </li>
              <li>
                <a href="https://rrbhanderi05.github.io/lokspire-new" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-teal-400 transition-colors duration-300 text-lg">
                  Add Your Business
                </a>
              </li>
              <li>
                <a href="https://rrbhanderi05.github.io/info/about.html" className="text-blue-100 hover:text-teal-400 transition-colors duration-300 text-lg">About Us</a>
              </li>
              <li>
                <a href="https://rrbhanderi05.github.io/info/privacy-policy.html" className="text-blue-100 hover:text-teal-400 transition-colors duration-300 text-lg">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href="mailto:rrbhanderi05@gmail.com" 
                className="flex items-center text-blue-100 hover:text-teal-400 transition-colors duration-300 text-lg"
              >
                <Mail size={24} className="mr-3" />
                rrbhanderi05@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-blue-700/50 text-center">
          <p className="text-blue-200 text-lg">&copy; {new Date().getFullYear()} Lokspire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;