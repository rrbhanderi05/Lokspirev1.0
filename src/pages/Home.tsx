import React, { useState } from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import BusinessList from '../components/BusinessList';
import { useBusinesses } from '../hooks/useBusinesses';
import { SearchParams } from '../types';

const Home: React.FC = () => {
  const { businesses, loading, error, searchForBusinesses } = useBusinesses();
  const [searchPerformed, setSearchPerformed] = useState(false);
  
  const handleSearch = (params: SearchParams) => {
    searchForBusinesses(params);
    setSearchPerformed(true);
  };
  
  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="container-custom">
        <div className="max-w-4xl mx-auto -mt-24 mb-16 z-10 relative px-4">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        <div className="mb-16 px-4" id="featured-businesses">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">
            {searchPerformed ? 'Search Results' : 'Featured Businesses'}
          </h2>
          <BusinessList 
            businesses={businesses} 
            loading={loading} 
            error={error} 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;