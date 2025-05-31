import React from 'react';
import BusinessCard from './BusinessCard';
import { Business } from '../types';

interface BusinessListProps {
  businesses: Business[];
  loading: boolean;
  error: string | null;
}

const BusinessList: React.FC<BusinessListProps> = ({ businesses, loading, error }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse glass-card p-4 space-y-4">
            <div className="h-48 bg-blue-100 rounded-2xl"></div>
            <div className="space-y-3">
              <div className="h-6 bg-blue-100 rounded-full w-3/4"></div>
              <div className="h-4 bg-blue-100 rounded-full w-1/2"></div>
              <div className="h-4 bg-blue-100 rounded-full w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="w-full flex justify-center items-center py-12">
        <div className="glass-card p-8 text-center max-w-md">
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  if (businesses.length === 0) {
    return (
      <div className="w-full flex justify-center items-center py-12">
        <div className="glass-card p-8 text-center max-w-md">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">No businesses found</h3>
          <p className="text-gray-600 text-lg mb-6">
            Try adjusting your search criteria or browse all businesses.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-primary"
          >
            View All Businesses
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {businesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;