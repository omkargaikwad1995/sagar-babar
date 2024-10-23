import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import image1 from '../../assets/images/image 22.png';
import image2 from '../../assets/images/1576872916823.jpg';
import image3 from '../../assets/images/shivsamman.jpg';
import image4 from '../../assets/images/Mask group.png';

const AwardsAchievements = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [

        // Add more slides here
        {
            title: "Business leader of the year",
            year: "2021",
            description: "Comsense Technologies, co-founded by Sagar Babar, was awarded Company of the Year at the Business Leader of the Year 2021 by The Economic Times and The World HRD Congress.",
            image: {
                src: image1,
                alt: "Award Image"
            }
        },
        {
            title: "Amplify 2017 – Meet & Greet with Will Smith",
            year: "2017",
            description: "At Amplify 2017, Sagar Babar had the privilege of connecting with the iconic Will Smith, gaining valuable insights and motivation from the renowned actor during an inspiring meet and greet session.",
            image: {
                src: image2,
                alt: "Award Image"
            }
        },
        {
            title: "Shivsanman Award",
            year: "2024",
            description: "Sagar Babar received the prestigious Shivsanman Award from Sharadchandraji Pawar on the occasion of Chhatrapati Shivaji Maharaj Jayanti, honoring his outstanding contributions and achievements.",
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
            <h2 className="text-xl md:text-3xl font-bold justify-center text-center mb-8">Awards & Achievements</h2>
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
                        <h3 className="text-3xl md:text-3xl font-semibold mb-2">{slides[currentSlide].title}</h3>
                        <p className="text-gray-500 mb-4">{slides[currentSlide].year}</p>
                        <p className="text-gray-700 text-xl w-full md:w-2/3">{slides[currentSlide].description}</p>
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