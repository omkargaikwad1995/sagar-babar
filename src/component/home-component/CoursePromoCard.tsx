import { useEffect, useState } from 'react';
import courseBannerimage from '../../assets/images/course banner img.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CoursePromoCard = () => {
    const [animationKey, setAnimationKey] = useState(0);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimationKey(prevKey => prevKey + 1);
        }, 5000); // Repeat every 5 seconds

        return () => clearInterval(intervalId);
    }, []);
    const handleKnowMore = () => {
        navigate('/course');
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smooth scrolling
        }); // Replace '/course' with your actual course page route
    };

    const getFontClass = () => {
        return i18n.language === 'mr'
            ? 'font-marathi' // Class for Marathi font
            : 'font-sans'; // Default font for English
    };

    return (
        // <div className="bg-blue-900 rounded-xl p-4 sm:p-8 text-white relative overflow-hidden">
        //     {/* Decorative elements */}
        //     <div className="absolute top-4 right-4 hidden sm:block">
        //         <svg className="w-12 h-12 sm:w-16 sm:h-16 text-blue-800" viewBox="0 0 24 24" fill="currentColor">
        //             <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" />
        //         </svg>
        //     </div>
        //     <div className="absolute bottom-4 left-4 hidden sm:block">
        //         <svg className="w-8 h-8 sm:w-12 sm:h-12 text-blue-800" viewBox="0 0 24 24" fill="currentColor">
        //             <path d="M3 3h18v18H3z" />
        //         </svg>
        //     </div>

        //     {/* Course tag */}
        //     <span className="bg-blue-700 text-xs sm:text-sm font-semibold py-1 px-3 rounded-full">Course</span>

        //     {/* Course title and description */}
        //     <h2 className="text-2xl sm:text-4xl font-bold mt-4 mb-2">
        //         <span className="text-orange-500">How to Start Business:</span> <br />
        //         Learn Basics
        //     </h2>
        //     <p className="text-gray-300 mb-6 max-w-xl text-sm sm:text-base">
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        //     </p>

        //     {/* Course details */}
        //     <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mb-6">
        //         <div className="flex items-center">
        //             <Book className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        //             <span className="text-sm sm:text-base">15 Chapters</span>
        //         </div>
        //         <div className="flex items-center">
        //             <Video className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        //             <span className="text-sm sm:text-base">6 hours of video content</span>
        //         </div>
        //     </div>

        //     {/* Pricing */}
        //     <div className="mb-6">
        //         <span className="text-2xl sm:text-3xl font-bold">₹ 999</span>
        //         <span className="text-gray-400 line-through ml-2 text-sm sm:text-base">₹3999</span>
        //     </div>

        //     {/* CTA Button */}
        //     <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 text-sm sm:text-base">
        //         Know More
        //     </button>

        //     {/* Image elements */}
        //     <div className="mt-8 sm:mt-0 sm:absolute sm:top-1/2 sm:right-8 sm:transform sm:-translate-y-1/2">
        //         <div className="relative">
        //             <img src="/api/placeholder/300/400" alt="Course Instructor" className="w-full sm:w-64 h-auto mx-auto sm:mx-0" />
        //             <div className="absolute -top-8 -left-8 sm:-top-16 sm:-left-16 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
        //                 <svg className="w-12 h-12 sm:w-16 sm:h-16 text-red-500" viewBox="0 0 24 24" fill="currentColor">
        //                     <path d="M13 5.41V21h-2V5.41L5.41 11 4 9.59 12 1.59l8 8L18.59 11 13 5.41z" />
        //                 </svg>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="container mx-auto bg-blue-900 rounded-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
                {/* Content section */}
                <div className="p-6 sm:p-8 lg:w-3/5">
                    <span className='text-sm sm:text-base lg:text-xl font-light bg-blue-800 px-4 py-1 sm:px-6 sm:py-2 rounded-full inline-block mb-4 sm:mb-8'>{t('course')}</span>
                    <p className='text-sm sm:text-2xl lg:text-xl font-bold mb-4'>{t('course1')}</p>
                    <h2 className={`text-xl sm:text-2xl lg:text-3xl text-orange-400 font-bold ${getFontClass()}`}>{t('courseTitle1')}</h2>
                    <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4 ${getFontClass()}`}>{t('tagline1')}</h2>
                    <p className="mb-6 text-sm sm:text-lg text-gray-300 ">
                        {t('chapterInfo')}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-6 text-sm sm:text-lg text-white">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className='border rounded-sm border-gray-400 mr-2' width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M16.6127 16.0847C13.9796 17.5678 12.4773 20.641 12 21.5001V8.00005C12.4145 7.25401 13.602 5.11651 15.6317 3.66373C16.4868 3.05172 16.9143 2.74571 17.4572 3.02473C18 3.30376 18 3.91968 18 5.15151V13.9915C18 14.6569 18 14.9896 17.8634 15.2234C17.7267 15.4572 17.3554 15.6664 16.6127 16.0847Z" stroke="#FF8125" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 7.80556C11.3131 7.08403 9.32175 5.3704 5.98056 4.76958C4.2879 4.4652 3.44157 4.31301 2.72078 4.89633C2 5.47965 2 6.42688 2 8.32133V15.1297C2 16.8619 2 17.728 2.4626 18.2687C2.9252 18.8095 3.94365 18.9926 5.98056 19.3589C7.79633 19.6854 9.21344 20.2057 10.2392 20.7285C11.2484 21.2428 11.753 21.5 12 21.5C12.247 21.5 12.7516 21.2428 13.7608 20.7285C14.7866 20.2057 16.2037 19.6854 18.0194 19.3589C20.0564 18.9926 21.0748 18.8095 21.5374 18.2687C22 17.728 22 16.8619 22 15.1297V8.32133C22 6.42688 22 5.47965 21.2792 4.89633C20.5584 4.31301 19 4.76958 18 5.5" stroke="#FF8125" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {t('chapters')}
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className='border rounded-sm border-gray-400 mr-2' width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M2 11C2 7.70017 2 6.05025 3.02513 5.02513C4.05025 4 5.70017 4 9 4H10C13.2998 4 14.9497 4 15.9749 5.02513C17 6.05025 17 7.70017 17 11V13C17 16.2998 17 17.9497 15.9749 18.9749C14.9497 20 13.2998 20 10 20H9C5.70017 20 4.05025 20 3.02513 18.9749C2 17.9497 2 16.2998 2 13V11Z" stroke="#FF8125" strokeWidth="1.5" />
                                <path d="M17 8.90585L17.1259 8.80196C19.2417 7.05623 20.2996 6.18336 21.1498 6.60482C22 7.02628 22 8.42355 22 11.2181V12.7819C22 15.5765 22 16.9737 21.1498 17.3952C20.2996 17.8166 19.2417 16.9438 17.1259 15.198L17 15.0941" stroke="#FF8125" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z" stroke="#FF8125" strokeWidth="1.5" />
                            </svg>
                            {t('chaptersContent')}
                        </div>
                    </div>
                    <div className="flex items-center mb-0 md:mb-4 relative overflow-hidden h-16">
                        <span
                            key={`new-price-${animationKey}`}
                            className="text-xl sm:text-2xl lg:text-3xl font-bold mr-2 text-white animate-slide-in"
                        >
                            ₹999
                        </span>
                        <span
                            key={`old-price-${animationKey}`}
                            className="text-2xl sm:text-3xl lg:text-4xl  font-bold line-through text-orange-500 absolute left-16 sm:left-24 animate-slide-out"
                        >
                            ₹3999
                        </span>
                    </div>
                    <button
                        onClick={handleKnowMore}
                        className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 text-sm sm:text-base w-full sm:w-auto"
                    >
                        {t('knowMore')}
                    </button>
                </div>

                {/* Image section */}
                <div className="lg:w-full h-42 sm:h-64 lg:h-auto">
                    <img
                        src={courseBannerimage}
                        alt="Course Banner"
                        className="w-full h-full object-cover object-center lg:object-right"
                    />
                </div>
            </div>
        </div>
    );
};

export default CoursePromoCard;