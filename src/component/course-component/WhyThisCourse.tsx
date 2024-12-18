import group1 from '../../assets/icons/Group 1000006536.svg';
import group2 from '../../assets/icons/Group 1000006537.svg';
import group3 from '../../assets/icons/Group 1000006530.svg';
import cover from '../../assets/images/Group 1000006557.png';
import { useTranslation } from 'react-i18next';

const WhyThisCourse = () => {
    const { t } = useTranslation();
    return (
        <section className="relative min-h-[700px] md:min-h-[300px]">
            <img
                src={cover}
                alt=""
                className="w-full h-full absolute object-cover"
            />

            <div className="relative flex flex-col items-center p-4 sm:p-6 md:p-8 min-h-[400px] md:min-h-[400px]">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500 text-center mt-8 md:mt-12">
                    {t('why1')} <span className="text-white">{t('why2')}</span>
                </h2>

                <div className="flex flex-col sm:flex-row gap-6 w-full max-w-6xl mt-4 md:mt-8">
                    <div className="bg-white/95 p-4 md:p-6 rounded-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-2 flex-1 border border-orange-500 [box-shadow:4px_4px_0px_0px_#f97316]">
                        <span className="shrink-0">
                            <img
                                src={group3}
                                alt="Market Research"
                                className="w-16 sm:w-14 p-2 h-16 sm:h-24"
                            />
                        </span>
                        <p className="text-sm md:text-base text-center sm:text-left">
                            {t('reason1')}
                        </p>
                    </div>
                    <div className="bg-white/95 p-4 md:p-6 rounded-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-2 flex-1 border border-orange-500 [box-shadow:4px_4px_0px_0px_#f97316]">
                        <span className="shrink-0">
                            <img
                                src={group1}
                                alt="Market Research"
                                className="w-16 sm:w-14 p-2 h-16 sm:h-24"
                            />
                        </span>
                        <p className="text-sm md:text-base text-center sm:text-left">
                            {t('reason2')}
                        </p>
                    </div>
                    <div className="bg-white/95 p-4 md:p-6 rounded-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-2 flex-1 border border-orange-500 [box-shadow:4px_4px_0px_0px_#f97316]">
                        <span className="shrink-0">
                            <img
                                src={group2}
                                alt="Market Research"
                                className="w-16 sm:w-14 p-2 h-16 sm:h-24"
                            />
                        </span>
                        <p className="text-sm md:text-base text-center sm:text-left">
                            {t('reason3')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default WhyThisCourse;