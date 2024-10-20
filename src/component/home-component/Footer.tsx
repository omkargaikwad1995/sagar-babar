import linkedin from '../../assets/icons/linkedin.png'
import instagram from '../../assets/icons/instagram.png'
import youtube from '../../assets/icons/youtube.png'
const Footer = () => {
    const socialLinks = [
        { name: 'instagram', icon: instagram, url: "https://www.instagram.com/sagarbabar/" },
        { name: 'linkedin', icon: linkedin, url: "https://www.linkedin.com/in/sagarbabar" },
        { name: 'youtube', icon: youtube, url: "https://youtube.com/@sagarbabar_" },
    ];
    return (
        <div>
            {/* Footer */}
            < footer className="bg-blue-800 text-white py-10 px-4 sm:px-6 md:px-10" >
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold mb-2 text-lg">Sagar Babar</h3>
                            <p className="text-sm">Entrepreneur, Business Coach, Educator,<br />Author and Motivation Practitioner</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Quick Links</h4>
                            <ul className="text-sm">
                                <li><a href="#" className="hover:text-gray-300">Course</a></li>
                                <li><a href="#" className="hover:text-gray-300">My Story</a></li>
                                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
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
                    <div className="mt-8 text-center text-xs sm:text-sm">
                        Copyright © 2024 Sagarbabar.com. All rights reserved.
                    </div>
                </div>
            </footer >
        </div>
    )
}

export default Footer
