import courseBannerimage2 from '../../assets/images/course cover red.png';

const HeroSection = () => {
    return (
        <section className="p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8">
                        <h3><span className="text-blue-900 font-semibold">"Maharashtra's first-ever business course in Marathi."</span></h3>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-2 xl:text-5xl font-bold text-blue-900 mb-4 md:mb-6">
                            Start and Grow Your Business with{' '}
                            <span className="text-orange-500">Expert Guidance</span>{' '}
                            in Marathi
                        </h1>

                        <p className="mb-6 text-gray-600 text-sm sm:text-base md:text-lg">
                            Dive into the world of entrepreneurship with our comprehensive <span className='font-semibold text-black'>15-chapter course, designed specifically for Marathi businessmen.</span> This course will equip you with the knowledge and practical skills to take your business to the next level!
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
                                <img
                                    src={courseBannerimage2}
                                    alt="Sagar Babar"
                                    loading="lazy"
                                    className="w-full h-full max-w-[90%] lg:max-w-[80%] object-contain fade-in-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;