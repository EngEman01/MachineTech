import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('home.welcome')}</h1>
          <p className="text-xl mb-8">{t('home.subtitle')}</p>
          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            {t('home.viewProducts')}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('home.categories.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">{t('home.categories.machinery.title')}</h3>
            <p className="mb-4">{t('home.categories.machinery.description')}</p>
            <Link
              to="/category/machinery"
              className="text-blue-600 hover:text-blue-800"
            >
              {t('home.categories.machinery.link')} →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">{t('home.categories.software.title')}</h3>
            <p className="mb-4">{t('home.categories.software.description')}</p>
            <Link
              to="/category/software"
              className="text-blue-600 hover:text-blue-800"
            >
              {t('home.categories.software.link')} →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">{t('home.categories.automation.title')}</h3>
            <p className="mb-4">{t('home.categories.automation.description')}</p>
            <Link
              to="/category/automation"
              className="text-blue-600 hover:text-blue-800"
            >
              {t('home.categories.automation.link')} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home