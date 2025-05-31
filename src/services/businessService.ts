import { Business, SearchParams } from '../types';
import { MOCK_BUSINESSES } from '../constants';

export const getBusinesses = async (): Promise<Business[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_BUSINESSES);
    }, 500);
  });
};

export const getBusiness = async (id: string): Promise<Business> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const business = MOCK_BUSINESSES.find(b => b.id === id);
      if (business) {
        resolve(business);
      } else {
        reject(new Error('Business not found'));
      }
    }, 500);
  });
};

export const searchBusinesses = async (params: SearchParams): Promise<Business[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { query, location, category } = params;
      const normalizedQuery = query.toLowerCase().trim();
      
      let filteredBusinesses = [...MOCK_BUSINESSES];
      
      if (normalizedQuery) {
        filteredBusinesses = filteredBusinesses.filter(
          (business) => 
            business.name.toLowerCase().includes(normalizedQuery) ||
            business.description.toLowerCase().includes(normalizedQuery)
        );
      }
      
      if (location && location !== 'All') {
        filteredBusinesses = filteredBusinesses.filter(
          (business) => business.location === location
        );
      }
      
      if (category && category !== 'All') {
        filteredBusinesses = filteredBusinesses.filter(
          (business) => business.category === category
        );
      }
      
      resolve(filteredBusinesses);
    }, 500);
  });
};