import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import cover from '../../assets/images/Group 351.jpg'
import logo from '../../assets/images/Sagar Babar....png'
import LanguageSwitcher from '../../services/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import '../../services/index';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleContactClick = (e: any) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            localStorage.setItem('scrollToContact', 'true');
            navigate('/');
        } else {
            scrollToContact();
        }
        setIsMenuOpen(false);
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-form-section');
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

    const isActive = (path: any) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    const navItems = [
        { name: t('navHome'), path: '/' },
        {
            name: t('navCourse'),
            dropdown: [
                { name: 'Business 1.0 by Sagar Babar', path: '/course' },
                { name: 'Sales and Marketing by Sagar Babar', path: '/sales-and-marketing' },
                { name: 'Ultimate Business Bundle by Sagar Babar', path: '/ultimate-business-bundle' }
            ]
        },
        { name: t('navContact'), onClick: handleContactClick, isContact: true },
        { name: t('mentorship'), path: '/mentorship' },
    ];

    return (
        <nav className="relative text-white px-4 sm:px-6 md:px-10 py-4 z-50">
            <img src={cover} alt="Navigation background" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="container mx-auto flex justify-between items-center bg-blue-800 relative rounded-full p-4 z-10">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    <img src={logo} alt="Sagar Babar Logo" className="h-8 sm:h-10 w-auto" />
                </Link>

                <button onClick={toggleMenu} className="lg:hidden text-white z-20">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`fixed inset-0 bg-blue-800 bg-opacity-95 z-40 lg:relative lg:bg-transparent lg:inset-auto ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                    {/* Add close button for mobile */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden absolute top-4 right-4 text-white p-2"
                    >
                        <X size={24} />
                    </button>

                    {/* Add logo for mobile menu */}
                    <div className="lg:hidden flex justify-center mt-8 mb-8">
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>
                            <img src={logo} alt="Sagar Babar Logo" className="h-10 w-auto" />
                        </Link>
                    </div>

                    <ul className="flex flex-col lg:flex-row justify-center items-center h-full lg:h-auto">
                        {navItems.map((item) => (
                            <li key={item.name} className="mb-8 lg:mb-0 lg:ml-6 relative group">
                                {item.dropdown ? (
                                    <>
                                        {/* Parent button */}
                                        <span
                                            className={`block cursor-pointer transition text-center duration-300 text-xl lg:text-base ${isActive('/course')
                                                ? 'text-orange-500 font-semibold'
                                                : 'text-white hover:text-orange-500'
                                                }`}
                                        >
                                            {item.name}
                                        </span>

                                        {/* Dropdown menu */}
                                        <ul
                                            className="
    lg:absolute lg:left-0 lg:top-full lg:bg-blue-800 lg:rounded-lg text-center lg:shadow-lg lg:hidden group-hover:block 
    w-full lg:w-56
  "
                                        >
                                            {item.dropdown.map((sub) => (
                                                <li
                                                    key={sub.name}
                                                    className="
        border-b border-blue-700 last:border-none 
        lg:border-none
      "
                                                >
                                                    <Link
                                                        to={sub.path}
                                                        className="
          block px-4 py-3 
          text-white rounded-md hover:bg-orange-500 hover:rounded-md
          transition 
          text-lg lg:text-base
        "
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : item.path ? (
                                    <Link
                                        to={item.path}
                                        className={`block transition duration-300 text-xl lg:text-base ${isActive(item.path)
                                            ? 'text-orange-500 font-semibold'
                                            : 'text-white hover:text-orange-500'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <button
                                        className={`block transition duration-300 text-xl lg:text-base 
                        ${item.isContact
                                                ? 'text-white hover:text-white'
                                                : 'text-white hover:text-orange-500'
                                            }`}
                                        onClick={item.onClick}
                                    >
                                        {item.name}
                                    </button>
                                )}
                            </li>
                        ))}
                        <LanguageSwitcher />
                        <li className="mt-4 lg:mt-0 lg:ml-6">

                            <a href="https://course.sagarbabar.com/s/authenticate?url=/t/activecourses"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 text-lg lg:text-base lg:px-4 lg:py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('navLogin')}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;