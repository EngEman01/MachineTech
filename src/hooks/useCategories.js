import { useQuery } from 'react-query';
import { fetchCategories } from '../services/api';

export const useCategories = () => {
  return useQuery('categories', fetchCategories, {
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};