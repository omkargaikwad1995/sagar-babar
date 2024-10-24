import { useState } from 'react';
import { Award, Boxes, Eye, Handshake, Play } from 'lucide-react';
import mystoryImange from '../../assets/images/image 28.png';
import mystorybg from '../../assets/images/Group.png';
import journeyicon from '../../assets/icons/Customer Journey.svg';

const MyStorySection = () => {
    const [showVideo, setShowVideo] = useState(false);

    const toggleVideo = () => {
        setShowVideo(!showVideo);
    };

    return (
        <section className="relative py-6 px-4 sm:px-6 md:px-10 overflow-hidden">
            <div className="absolute inset-0">
                <img src={mystorybg} alt="My Story background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-0"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <h2 className="text-xl sm:text-3xl font-bold text-center mb-8 flex items-center justify-center text-black">My Story <img src={journeyicon} height={24} width={24} className='ml-2' alt="" /></h2>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="w-full md:w-3/4 mb-8 md:mb-0">
                                <div className="relative flex items-center justify-center group">
                                    <img
                                        src={mystoryImange}
                                        alt="My story"
                                        className="w-[280px] sm:w-[350px] md:w-full h-auto rounded-lg shadow-lg mx-auto md:mx-0"
                                    />
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
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 ">
                        <h3 className="text-xl md:text-4xl font-bold mb-4 text-black">
                            Take A Peek Into My Life And Discover The Various Facts That Made Me One Of The Top Business Leaders In 2021.
                        </h3>
                        <ul className="space-y-4 text-black font-semibold text-sm sm:text-base">
                            <li className="flex items-center">
                                <span className="text-orange-500 mr-2 text-xl bg-gray-200 rounded-full p-2"><Eye /></span>
                                100+ Million Views
                            </li>
                            <li className="flex items-center">
                                <span className="text-orange-500 mr-2 text-xl bg-gray-200 rounded-full p-2"><Handshake /></span>
                                Only Marathi Small Business Owner's Coach
                            </li>
                            <li className="flex items-center">
                                <span className="text-orange-500 mr-2 text-xl bg-gray-200 rounded-full p-2"><Boxes /></span>
                                Top 100 Leader Impact
                            </li>
                            <li className="flex items-center">
                                <span className="text-orange-500 mr-2 text-xl bg-gray-200 rounded-full p-2"><Award /></span>
                                IBM Best partner award to Comsense
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

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
    );
};

export default MyStorySection;