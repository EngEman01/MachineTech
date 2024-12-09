import { useQuery } from 'react-query';
import { fetchProducts, fetchProductsByCategory } from '../services/api';

export const useProducts = (categoryId) => {
  return useQuery(
    ['products', categoryId],
    () => categoryId ? fetchProductsByCategory(categoryId) : fetchProducts(),
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );
};