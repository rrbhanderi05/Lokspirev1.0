import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-custom py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://raw.githubusercontent.com/rrbhanderi05/FileHosting/refs/heads/main/Lokspire.png" 
              alt="Lokspire Logo" 
              className="h-12 w-auto filter brightness-0 invert transition-transform duration-300 hover:scale-105"
            />
          </Link>
          
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <a 
                  href="https://rrbhanderi05.github.io/lokspire-new" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-blue-100 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="https://rrbhanderi05.github.io/lokspire-new" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-hero-primary py-2.5 px-5"
                >
                  Add Listing
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;