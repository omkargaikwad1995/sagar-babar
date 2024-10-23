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

    return (
        <div className="min-h-screen">
            <HeroSection />
            <AboutSection />
            <MyStorySection />

            <section className="bg-blue-900 rounded-lg text-white m-8 md:m-14">
                <CoursePromoCard />
            </section>

            <section id="approch-section" className="bg-gray-100 py-6 sm:py-10 px-4 sm:px-6 md:px-10">
                <ApproachReasons />
            </section>

            <section className="py-6 sm:py-10 items-center justify-center flex px-4 sm:px-6 md:px-10">
                <AwardsAchievements />
            </section>

            <section className="sm:py-20 px-4 sm:px-6 md:px-10">
                <FeaturedVideos />
            </section>

            <section id="contact-form-section">
                <ContactForm />
            </section>
        </div>
    );
};

export default HomePage;