import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">{t('about.title')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">{t('about.story.title')}</h2>
          <p className="mb-4">{t('about.story.content1')}</p>
          <p className="mb-4">{t('about.story.content2')}</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h2>
          <p className="mb-4">{t('about.mission.content')}</p>
          <ul className="list-disc pl-6">
            <li className="mb-2">{t('about.mission.values.quality')}</li>
            <li className="mb-2">{t('about.mission.values.customer')}</li>
            <li className="mb-2">{t('about.mission.values.innovation')}</li>
            <li className="mb-2">{t('about.mission.values.sustainability')}</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">{t('about.whyChooseUs.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{t('about.whyChooseUs.support.title')}</h3>
            <p>{t('about.whyChooseUs.support.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{t('about.whyChooseUs.quality.title')}</h3>
            <p>{t('about.whyChooseUs.quality.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{t('about.whyChooseUs.global.title')}</h3>
            <p>{t('about.whyChooseUs.global.description')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About