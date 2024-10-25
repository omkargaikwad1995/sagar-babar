import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../component/home-component/HeroSection';
import AboutSection from '../component/home-component/AboutSection';
import MyStorySection from '../component/home-component/MyStorySection';
import CoursePromoCard from '../component/home-component/CoursePromoCard';
import ApproachReasons from '../component/home-component/ReasonCard';
import AwardsAchievements from '../component/home-component/AwardsAchievement';
import FeaturedVideos from '../component/home-component/FeaturedVideos';
import ContactForm from '../component/home-component/ContactForm';

const HomePage = () => {
    const location = useLocation();

    // const scrollToContact = () => {
    //     const contactSection = document.getElementById('approch-section');
    //     if (contactSection) {
    //         contactSection.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    // useEffect(() => {
    //     const shouldScroll = localStorage.getItem('scrollToContact');
    //     if (shouldScroll === 'true' && location.pathname === '/') {
    //         scrollToContact();
    //         localStorage.removeItem('scrollToContact');
    //     }
    // }, [location]);


    useEffect(() => {
        const scrollToSection = localStorage.getItem('scrollToSection');

        if (scrollToSection) {
            // Wait a bit for the page to load
            setTimeout(() => {
                const element = document.getElementById(scrollToSection);
                if (element) {
                    const offset = window.innerWidth < 768 ? 80 : 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
                localStorage.removeItem('scrollToSection');
            }, 100);
        }
    }, [location]);

    return (
        <div className="min-h-screen overflow-x-hidden"> {/* Added overflow-x-hidden */}
            <HeroSection />
            <AboutSection />
            <section id="my-story-section">
                <MyStorySection />
            </section>

            <section className="bg-blue-900 rounded-lg text-white mx-4 md:m-14"> {/* Changed m-8 to mx-4 */}
                <CoursePromoCard />
            </section>

            <section id="approch-section" className="bg-gray-100 py-6 sm:py-10 px-4 sm:px-6 md:px-10">
                <ApproachReasons />
            </section>

            <section className="py-6 sm:py-10 px-4 sm:px-6 md:px-10"> {/* Added consistent padding */}
                <AwardsAchievements />
            </section>

            <section className="py-6 sm:py-20 px-4 sm:px-6 md:px-10"> {/* Added consistent padding */}
                <FeaturedVideos />
            </section>

            <section id="contact-form-section">
                <ContactForm />
            </section>
        </div>
    );
};

export default HomePage;