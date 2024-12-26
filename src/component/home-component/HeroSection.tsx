import { useLocation, useNavigate } from 'react-router-dom';
import cover from '../../assets/images/Group 351.jpg';
import sagar from '../../assets/images/Group 427.png';
import line from '../../assets/images/Group 370.png';
import follower from '../../assets/images/Group 353.png';
import orange from '../../assets/images/orange gradient rectangle.png';
import bottom from '../../assets/images/Vector 14.png';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const getFontClass = () => {
        return i18n.language === 'mr'
            ? 'font-marathi' // Class for Marathi font
            : 'font-sans'; // Default font for English
    };

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

    return (
        <section className="relative text-white overflow-hidden py-10 z-0">
            <img src={cover} alt="Hero background" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 px-4 sm:px-6 md:px-10">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h1 className={`text-2xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4 md:w-3/4 ${getFontClass()}`}>
                        {t('heroTitle1')}
                        <span> {t('heroTitle2')}<img src={line} height={150} width={150} alt="decorative line" /></span>
                    </h1>
                    <button
                        className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-orange-600 text-sm sm:text-base"
                        onClick={handleAskMeHowClick}
                    >
                        {t('askHow')}
                    </button>
                    <img src={follower} alt="Follower" className="w-28 sm:w-44 mt-6 md:mt-12" />
                </div>
                <div className="w-full md:w-1/2 -mb-20 sm:-mb-30 md:-mb-40 bottom-4 md:-bottom-10 relative fade-in-image">
                    <img
                        src={sagar}
                        alt="Hero image"
                        loading="lazy"
                        className="w-[280px] sm:w-[350px] md:w-full h-auto rounded-lg mx-auto md:mx-0"
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
    );
};

export default HeroSection;