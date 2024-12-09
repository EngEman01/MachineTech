import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useProducts } from '../hooks/useProducts'
import { useCategories } from '../hooks/useCategories'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'

function Products() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const { 
    data: products, 
    isLoading: productsLoading, 
    error: productsError 
  } = useProducts(selectedCategory !== 'all' ? selectedCategory : null);
  
  const { 
    data: categories, 
    isLoading: categoriesLoading, 
    error: categoriesError 
  } = useCategories();

  if (productsLoading || categoriesLoading) return <LoadingSpinner />;
  if (productsError) return <ErrorMessage message={t('errors.loadingProducts')} />;
  if (categoriesError) return <ErrorMessage message={t('errors.loadingCategories')} />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">{t('products.title')}</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{t('products.filterByCategory')}:</h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {t('products.allProducts')}
          </button>
          {categories?.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {t(`home.categories.${category.id}.title`)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products?.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${product.price.toLocaleString()}</span>
                <Link
                  to={`/category/${product.category}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {t('products.viewCategory')} →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;