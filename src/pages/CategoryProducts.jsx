import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useProducts } from '../hooks/useProducts'
import { useCategories } from '../hooks/useCategories'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'

function CategoryProducts() {
  const { t } = useTranslation();
  const { categoryId } = useParams();
  
  const { 
    data: products, 
    isLoading: productsLoading, 
    error: productsError 
  } = useProducts(categoryId);
  
  const { 
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError
  } = useCategories();

  if (productsLoading || categoriesLoading) return <LoadingSpinner />;
  if (productsError) return <ErrorMessage message={t('errors.loadingProducts')} />;
  if (categoriesError) return <ErrorMessage message={t('errors.loadingCategories')} />;

  const category = categories?.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">{t('products.categoryNotFound')}</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">{t(`home.categories.${categoryId}.title`)}</h1>

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
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  {t('products.contactSales')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;