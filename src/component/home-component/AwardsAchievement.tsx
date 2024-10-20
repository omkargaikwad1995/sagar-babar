import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import image1 from '../../assets/images/image 22.png';

const AwardsAchievements = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "TOP TALENT Award 2007 & 2008 for leadership",
            year: "2015",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.",
            image: {
                src: image1,
                alt: "Award Image"
            }
        },
        // Add more slides here
        {
            title: "Another Award Title",
            year: "2019",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.",
            image: {
                src: image1,
                alt: "Award Image"
            }
        },
        // ... more slides as needed
    ];

    const handleDotClick = (index: any) => {
        setCurrentSlide(index);
    };

    return (
        <div className="container px-8 relative">
            <h2 className="text-xl md:text-3xl font-bold justify-center text-center mb-8">Awards & Achievements</h2>

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
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">{slides[currentSlide].title}</h3>
                        <p className="text-gray-500 mb-4">{slides[currentSlide].year}</p>
                        <p className="text-gray-700 w-2/3">{slides[currentSlide].description}</p>
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