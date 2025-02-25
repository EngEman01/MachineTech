import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MachineTech</h3>
            <p className="text-gray-300">{t('home.subtitle')}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.info.title')}</h3>
            <p className="text-gray-300">{t('contact.info.email.value')}</p>
            <p className="text-gray-300">{t('contact.info.phone.value')}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} MachineTech. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer