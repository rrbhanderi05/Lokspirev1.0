import { useState, useEffect } from 'react';
import { Business } from '../types';
import { getBusiness } from '../services/businessService';

export const useBusiness = (id: string) => {
  const [business, setBusiness] = useState<Business | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getBusiness(id);
        setBusiness(data);
      } catch (err) {
        setError('Failed to fetch business details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBusiness();
  }, [id]);

  return { business, loading, error };
};