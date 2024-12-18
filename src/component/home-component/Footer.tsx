import linkedin from '../../assets/icons/linkedin.png'
import instagram from '../../assets/icons/instagram.png'
import youtube from '../../assets/icons/youtube.png'
import logo from '../../assets/images/Sagar Babar....png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Footer = () => {
    const socialLinks = [
        { name: 'instagram', icon: instagram, url: "https://www.instagram.com/sagarbabar/" },
        { name: 'linkedin', icon: linkedin, url: "https://www.linkedin.com/in/sagarbabar" },
        { name: 'youtube', icon: youtube, url: "https://youtube.com/@sagarbabar_" },
    ];
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const handleNavigation = (sectionId: any) => {
        if (location.pathname !== '/') {
            // If we're not on home page, store the section to scroll to
            localStorage.setItem('scrollToSection', sectionId);
            navigate('/');
        } else {
            // If we're already on home page, just scroll
            const element = document.getElementById(sectionId);
            if (element) {
                const offset = window.innerWidth < 768 ? 80 : 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };
    return (
        <div>
            {/* Footer */}
            < footer className="bg-blue-800 text-white py-10 px-4 sm:px-6 md:px-10" >
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <img src={logo} alt="Sagar Babar Logo" className="h-8 sm:h-10 w-auto" />
                            <p className="text-sm mt-4">{t('footerDesc')}</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Quick Links</h4>
                            <ul className="text-sm">
                                <li>
                                    <Link
                                        to="/course"
                                        className="hover:text-gray-300"
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    >
                                        Course
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        className="hover:text-gray-300"
                                        onClick={() => handleNavigation('my-story-section')}
                                    >
                                        My Story
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="hover:text-gray-300"
                                        onClick={() => handleNavigation('contact-form-section')}
                                    >
                                        Contact Us
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Contact</h4>
                            <p className="text-sm">Email: contact@sagarbabar.com</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Social Links</h4>
                            <div className="flex space-x-2">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        className=""
                                    >
                                        <span className="sr-only">{social.name}</span>
                                        <img
                                            src={social.icon}
                                            alt={`${social.name} icon`}
                                            className="w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-110"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr className='mt-2' />
                    <div className="mt-8 text-center text-xs sm:text-sm">
                        Copyright © 2024 Sagarbabar.com. All rights reserved.
                    </div>
                </div>
            </footer >
        </div>
    )
}

export default Footer
