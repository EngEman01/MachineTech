import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async () => {
  const { data } = await api.get('/products');
  return data;
};

export const fetchCategories = async () => {
  const { data } = await api.get('/categories');
  return data;
};

export const fetchProductsByCategory = async (categoryId) => {
  const { data } = await api.get(`/products?category=${categoryId}`);
  return data;
};

export const submitContactForm = async (formData) => {
  const { data } = await api.post('/contact', formData);
  return data;
};

export default api;