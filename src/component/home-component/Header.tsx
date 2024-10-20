import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import cover from '../../assets/images/Group 351.jpg'
import logo from '../../assets/images/Sagar Babar....png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Course', path: '/course' },
        // { name: 'My Story', path: '/my-story' },
        { name: 'Contact', onClick: handleContactClick },
    ];

    return (
        <nav className="relative text-white px-4 sm:px-6 md:px-10 py-4 z-50">
            <img src={cover} alt="Navigation background" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="container mx-auto flex justify-between items-center bg-blue-800 relative rounded-full p-4 z-10">
                <img src={logo} alt="Sagar Babar Logo" className="h-8 sm:h-10 w-auto" />
                <button onClick={toggleMenu} className="lg:hidden text-white z-20">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`fixed inset-0 bg-blue-800 bg-opacity-95 z-40 lg:relative lg:bg-transparent lg:inset-auto ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                    <ul className="flex flex-col lg:flex-row justify-center items-center h-full lg:h-auto">
                        {navItems.map((item) => (
                            <li key={item.name} className="mb-4 lg:mb-0 lg:ml-6">
                                {item.path ? (
                                    <Link
                                        to={item.path}
                                        className="block text-white hover:text-orange-500 transition duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <button
                                        className="block text-white hover:text-orange-500 transition duration-300"
                                        onClick={item.onClick}
                                    >
                                        {item.name}
                                    </button>
                                )}
                            </li>
                        ))}
                        <li className="mt-4 lg:mt-0 lg:ml-6">
                            <Link
                                to="/login"
                                className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Course Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;