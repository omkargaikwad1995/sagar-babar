// import courseBannerimage2 from '../../assets/images/Group 1000006521.svg';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <section className="p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8">
                        <h3><span className="text-blue-900 font-semibold">{t('courseTagline')}</span></h3>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-2 xl:text-5xl font-bold text-blue-900 mb-4 md:mb-6">
                            {t('courseTitle1')}
                            <span className="text-orange-500 block text-xl mt-2 sm:mt-3 lg:mt-3">
                                {t('courseTitleTagline1')}
                            </span>
                            {/* <span className="text-orange-500 block mt-2 sm:mt-3 lg:mt-3">
                                {t('courseTitle2')}
                            </span> */}
                        </h1>

                        <p className="mb-6 text-gray-600 text-sm sm:text-base md:text-lg">
                            {t('courseDesc1')} <span className='font-semibold text-black'>{t('courseDesc2')}</span> {t('courseDesc3')}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-6">

                            <a href="https://course.sagarbabar.com/courses/How-to-start-business-670e02c79bdcdb5ec721dd0e-670e02c79bdcdb5ec721dd0e"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-full transition duration-300 text-sm sm:text-base whitespace-nowrap"
                            >
                                Enroll Now
                            </a>

                            <div className="flex items-center gap-4">
                                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                                    ₹999
                                </span>
                                <span className="text-xl sm:text-2xl lg:text-3xl font-bold line-through text-orange-500">
                                    ₹3999
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Image Section - Modified */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <div className="relative w-full h-full min-h-[300px] lg:min-h-[600px] p-4 sm:p-6 md:p-8">
                            <div className="w-full h-full flex items-center justify-center">

                                <div className="w-full max-w-4xl mx-auto">
                                    {/* Responsive container with 16:9 aspect ratio */}
                                    <div className="relative w-full pt-[57.50%]">
                                        <iframe
                                            className="absolute top-0 left-0 w-full h-full rounded-lg border-4 border-blue-800"
                                            src="https://www.youtube.com/embed/goRs9aOb-bc?si=A7uRq4IjqNpbzGz6&autoplay=1&mute=0"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            referrerPolicy="strict-origin-when-cross-origin"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;