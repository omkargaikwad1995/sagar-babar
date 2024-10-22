import cover from '../assets/images/Group 351.jpg'
import sagar from '../assets/images/Group 427.png'
import line from '../assets/images/Group 370.png'
import follower from '../assets/images/Group 353.png'
import orange from '../assets/images/orange gradient rectangle.png'
import bottom from '../assets/images/Vector 14.png'
import AboutGrid from '../component/home-component/AboutGrid';
import instagram from '../assets/icons/instagram.png'
import linkedin from '../assets/icons/linkedin.png'
import youtube from '../assets/icons/youtube.png'
import mystoryImange from '../assets/images/image 28.png'
import mystorybg from '../assets/images/Group.png'
import ApproachReasons from '../component/home-component/ReasonCard';
import CoursePromoCard from '../component/home-component/CoursePromoCard';
import AwardsAchievements from '../component/home-component/AwardsAchievement';
import FeaturedVideos from '../component/home-component/FeaturedVideos';
import ContactForm from '../component/home-component/ContactForm';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Award, Boxes, Eye, Handshake, Play } from 'lucide-react'
const HomePage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleAskMeHowClick = (e: any) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            localStorage.setItem('scrollToContact', 'true');
            navigate('/');
        } else {
            scrollToContact();
        }

    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('approch-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const shouldScroll = localStorage.getItem('scrollToContact');
        if (shouldScroll === 'true' && location.pathname === '/') {
            scrollToContact();
            localStorage.removeItem('scrollToContact');
        }
    }, [location]);

    const [showVideo, setShowVideo] = useState(false);

    const toggleVideo = () => {
        setShowVideo(!showVideo);
    };

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <section className="relative text-white overflow-hidden py-10 z-0">  {/* Added z-0 here */}
                <img src={cover} alt="Hero background" className="absolute inset-0 w-full h-full object-cover z-0" />
                <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 px-4 sm:px-6 md:px-10">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl text-gray-700 font-bold mb-4 md:w-3/4">You are Never too Young to start an Empire and Never too Old to <span>Pursue a Dream<img src={line} height={150} width={150}></img></span></h1>
                        <button className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-orange-600 text-sm sm:text-base" onClick={handleAskMeHowClick}>Ask me how</button>
                        <img src={follower} alt="Follower" className="w-28 sm:w-44 mt-6 md:mt-12" />
                    </div>
                    <div className="w-full md:w-1/2 -mb-40 sm:-mb-30 bottom-0 relative fade-in-image">
                        <img
                            src={sagar}
                            alt="Hero image"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>

                <img
                    src={orange}
                    alt="Overlapping image"
                    className="absolute top-1/2 -right-full transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-20"
                />
                <img
                    src={bottom}
                    alt="Third image"
                    className="relative -mb-10 inset-0 w-full h-full object-cover z-30"
                />
            </section>

            {/* About Section */}
            <section className="bg-blue-900 text-white px-4 sm:px-6 md:px-10 py-10 sm:py-20">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">About Sagar</h2>
                        <h1 className='mb-4 md:mb-1 sm:mb-8 text-xl md:text-xl sm:text-base font-semibold'>Hello
                        </h1>
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
                                <a href="https://www.instagram.com/sagarbabar/" className="bg-gradient-to-r p-1 rounded-full transition-transform duration-300 ease-in-out hover:scale-110">
                                    <img src={instagram} alt="Instagram" className="h-8 w-8" />
                                </a>
                                <a href="https://www.linkedin.com/in/sagarbabar" className="p-1 rounded-full transition-transform duration-300 ease-in-out hover:scale-110">
                                    <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
                                </a>
                                <a href="https://youtube.com/@sagarbabar_" className="p-1 rounded-full transition-transform duration-300 ease-in-out hover:scale-110">
                                    <img src={youtube} alt="YouTube" className="h-8 w-8" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div >
                            <AboutGrid />
                        </div>
                    </div>
                </div>
            </section >

            {/* My Story Section */}
            <section className="relative py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                    <img src={mystorybg} alt="My Story background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black opacity-0"></div>
                </div>

                {/* Content container */}
                <div className="container mx-auto relative z-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-black">My Story</h2>

                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 mb-8 md:mb-0">
                            <div className="relative flex items-center justify-center group">
                                <img
                                    src={mystoryImange}
                                    alt="My story"
                                    className="max-w-full h-auto rounded-lg shadow-lg"
                                    style={{ maxHeight: "500px", maxWidth: "500px" }}
                                />
                                {/* Play button overlay */}
                                <button
                                    onClick={toggleVideo}
                                    className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300"
                                >
                                    <div className="bg-orange-500 rounded-full p-4 hover:bg-orange-600 transition-colors duration-300">
                                        <Play size={32} className="text-white" />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:pl-8">
                            <h3 className="text-xl md:text-3xl font-bold mb-4 text-black">
                                Take A Peek Into My Life And Discover The Various Facts That Made Me One Of The Top Business Leaders In 2021.
                            </h3>
                            <ul className="space-y-4 text-black font-semibold text-sm sm:text-base">
                                <li className="flex items-center">
                                    <span className="text-orange-500 mr-2 text-xl"><Eye /></span>
                                    100+ Million Views
                                </li>
                                <li className="flex items-center">
                                    <span className="text-orange-500 mr-2 text-xl"><Handshake /></span>
                                    Only Marathi Small Business Owner's Coach
                                </li>
                                <li className="flex items-center">
                                    <span className="text-orange-500 mr-2 text-xl"><Boxes /></span>
                                    Top 100 Leader Impact
                                </li>
                                <li className="flex items-center">
                                    <span className="text-orange-500 mr-2 text-xl"><Award /></span>
                                    IBM Best partner award to Comsense
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Video Modal */}
                {showVideo && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
                        <div className="relative w-full max-w-4xl mx-auto">
                            <button
                                onClick={toggleVideo}
                                className="absolute -top-10 right-0 text-white hover:text-gray-300"
                            >
                                Close
                            </button>
                            <div className="relative pt-[56.25%] w-full">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/zi2pIe3eZHw"
                                    title="YouTube video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Reasons to Approach Section */}
            < section id="approch-section" className="bg-gray-100 py-6 sm:py-10 px-4 sm:px-6 md:px-10" >
                <ApproachReasons />
            </section >

            {/* Course Section */}
            < section className="bg-blue-900 rounded-lg text-white m-8 md:m-14" >
                <CoursePromoCard />
                {/* <CoursePromoCard /> */}
            </section >

            {/* Awards Section */}
            < section className="py-6 sm:py-10 items-center justify-center flex px-4 sm:px-6 md:px-10" >
                <AwardsAchievements />
            </section >
            < section className=" sm:py-20 px-4 sm:px-6 md:px-10" >
                <FeaturedVideos />
            </section >

            <section id="contact-form-section">
                <ContactForm />
            </section>

        </div >
    );
};

export default HomePage;