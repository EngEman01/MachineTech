import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">MachineTech</Link>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Link to="/" className="hover:text-gray-300">{t('nav.home')}</Link>
            <Link to="/about" className="hover:text-gray-300">{t('nav.about')}</Link>
            <Link to="/products" className="hover:text-gray-300">{t('nav.products')}</Link>
            <Link to="/contact" className="hover:text-gray-300">{t('nav.contact')}</Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar