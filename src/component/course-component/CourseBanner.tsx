import courseBannerimage2 from '../../assets/images/Group 1000006521.png';

const HeroSection = () => (
    <section className="p-4 sm:p-8 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
                Start and Grow Your Business with <span className="text-orange-500">Expert Guidance</span> in Marathi
            </h1>
            <p className="mb-6 text-gray-600 text-sm sm:text-base">
                Dive into the world of entrepreneurship with our comprehensive 12-chapter course, designed specifically for Marathi businessmen. This course will equip you with the knowledge and practical skills to take your business to the next level.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300 text-sm sm:text-base">
                Enroll Now
            </button>
        </div>
        <div className="w-full lg:w-1/2">
            <img
                src={courseBannerimage2}
                alt="Sagar Babar"
                className="w-full h-auto max-w-md mx-auto lg:max-w-full"
            />
            {/* Uncomment and adjust as needed */}
            <div className="absolute top-36 right-24 bg-red-500 text-white rounded-full p-2 text-xs sm:text-sm">
                10+ Million
            </div>
            {/* <div className="absolute bottom-4 right-4 bg-blue-100 text-blue-800 rounded-full p-2 text-xs sm:text-sm">
                Top 100 impact leader
            </div> */}

        </div>
    </section>
);

export default HeroSection;