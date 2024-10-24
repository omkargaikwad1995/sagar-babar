import AboutGrid from '../../component/home-component/AboutGrid';
import instagram from '../../assets/icons/instagram.png';
import linkedin from '../../assets/icons/linkedin.png';
import youtube from '../../assets/icons/youtube.png';

const AboutSection = () => {
    return (
        <section className="bg-blue-900 text-white px-4 sm:px-6 md:px-10 py-10 sm:py-20">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-2">About Sagar</h2>
                    <h1 className='mb-2 md:mb-1 sm:mb-8 text-xl md:text-xl sm:text-base font-semibold'>Hello</h1>
                    <div>
                        <p className='text-md'>I'm Sagar – an Entrepreneur, Business Coach, Educator, Author, and Meditation Practitioner. With over two decades of experience, I've built successful business models, setting up and running multiple ventures.</p>
                    </div>
                    <div className='mt-4 text-md'>
                        <p>My journey, shaped by both successes and failures, has helped me grow into a recognized business leader.</p>
                    </div>
                    <div className='mt-8'>
                        <p className='text-md bg-blue-700 px-3 py-2 absolute rounded-full'>Connect Sagar</p>
                    </div>
                    <div>
                        <div className='flex mt-20 space-x-2'>
                            <a
                                href="https://www.instagram.com/sagarbabar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r p-1 rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
                            >
                                <img src={instagram} alt="Instagram" className="h-8 w-8" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sagarbabar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
                            >
                                <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
                            </a>
                            <a
                                href="https://youtube.com/@sagarbabar_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
                            >
                                <img src={youtube} alt="YouTube" className="h-8 w-8" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <AboutGrid />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;