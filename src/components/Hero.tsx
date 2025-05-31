import React from 'react';

const Hero: React.FC = () => {
  const scrollToFeatured = () => {
    const featuredSection = document.getElementById('featured-businesses');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-teal-500 text-white py-16 md:py-24 rounded-b-[3rem] shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-500/90 to-teal-500/90"></div>
      
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-in">
            Discover Local Businesses in Amreli
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-50 animate-fade-in opacity-90">
            Connect with the finest local businesses, services, and professionals in your neighborhood
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
            <a 
              href="https://rrbhanderi05.github.io/lokspire-new" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-hero-primary group"
            >
              Add Your Business
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <button 
              onClick={scrollToFeatured}
              className="btn-hero-secondary group"
            >
              Explore Now
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default Hero;