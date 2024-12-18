import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import image1 from '../../assets/images/image 22.png';
import image2 from '../../assets/images/1576872916823.jpg';
import image3 from '../../assets/images/shivsamman.jpg';
import image4 from '../../assets/images/Mask group.png';
import { useTranslation } from 'react-i18next';

const AwardsAchievements = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { t } = useTranslation();

    const slides = [

        // Add more slides here
        {
            title: t('award1Title'),
            year: t('award1Year'),
            description: t('award1Description'),
            image: {
                src: image1,
                alt: "Award Image"
            }
        },
        {
            title: t('award2Title'),
            year: t('award2Year'),
            description: t('award2Description'),
            image: {
                src: image2,
                alt: "Award Image"
            }
        },
        {
            title: t('award3Title'),
            year: t('award3Year'),
            description: t('award3Description'),
            image: {
                src: image3,
                alt: "Award Image"
            }
        },
    ];

    const handleDotClick = (index: any) => {
        setCurrentSlide(index);
    };

    return (
        <div className="container px-8 relative">
            <h2 className="text-xl md:text-3xl font-bold justify-center text-center mb-8">{t('awards')}</h2>
            <img src={image4} className='absolute top-0 left-0' />
            <div className="flex flex-col md:flex-row items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-2/3 mb-6 md:mb-0"
                    >
                        <h3 className="text-xl md:text-3xl font-semibold mb-2">{slides[currentSlide].title}</h3>
                        <p className="text-gray-500 mb-4">{slides[currentSlide].year}</p>
                        <p className="text-gray-700 text-md md:text-xl w-full md:w-2/3">{slides[currentSlide].description}</p>
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-1/3 mr-10"
                    >
                        <img
                            src={slides[currentSlide].image.src}
                            alt={slides[currentSlide].title}
                            className="rounded-lg shadow-lg w-50 mr-10 h-50"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 mr-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full focus:outline-none transition-colors border-2 border-gray-300 duration-300 ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default AwardsAchievements;