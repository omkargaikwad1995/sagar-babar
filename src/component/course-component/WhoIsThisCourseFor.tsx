import icon4 from '../../assets/icons/Business Owner.svg';
import icon5 from '../../assets/icons/group-of-businessmen-svgrepo-com 1.svg';
import icon6 from '../../assets/icons/business-svgrepo-com 1.svg';
import cover from '../../assets/icons/cover34.svg';
import { useTranslation } from 'react-i18next'

const WhoIsThisCourseFor = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-[#F5F7FF] py-12 px-4 relative">
            {/* Background Image */}
            <img
                src={cover}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
                    <span className="text-orange-500">{t('courseWho')}</span> {t('courseIs')}{' '}
                    <span className="relative inline-block">
                        {t('courseFor')}
                    </span>
                </h2>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg p-8 flex flex-col items-center justify-center shadow-lg  bg-opacity-90 border border-gray-200">
                        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                            <img
                                src={icon4}
                                alt="Small business owners"
                                className="w-12 h-12 p-2"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">
                            {t('courseFor1')}
                        </h3>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg p-8 flex flex-col items-center justify-center shadow-lg bg-opacity-90 border border-gray-200">
                        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                            <img
                                src={icon5}
                                alt="Aspiring entrepreneurs"
                                className="w-12 h-12 p-2"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">
                            {t('courseFor2')}
                        </h3>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg p-8 flex flex-col items-center justify-center shadow-lg bg-opacity-90 border border-gray-200">
                        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                            <img
                                src={icon6}
                                alt="Looking to start Business"
                                className="w-12 h-12 p-2"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">
                            {t('courseFor3')}
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default WhoIsThisCourseFor;