import { useState, useEffect, useCallback } from 'react';
import { Business, SearchParams } from '../types';
import { getBusinesses, searchBusinesses } from '../services/businessService';

export const useBusinesses = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchBusinesses = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getBusinesses();
      setBusinesses(data);
    } catch (err) {
      setError('Failed to fetch businesses. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);
  
  const searchForBusinesses = useCallback(async (params: SearchParams) => {
    try {
      setLoading(true);
      setError(null);
      const data = await searchBusinesses(params);
      setBusinesses(data);
    } catch (err) {
      setError('Failed to search businesses. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);
  
  useEffect(() => {
    fetchBusinesses();
  }, [fetchBusinesses]);
  
  return {
    businesses,
    loading,
    error,
    fetchBusinesses,
    searchForBusinesses
  };
};