import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedVideos = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        {
            id: 'D6lUuDUS8j0',
            thumbnail: 'https://img.youtube.com/vi/D6lUuDUS8j0/0.jpg',
            title: 'Video 1'
        },
        {
            id: '2gl4zdZQOlE',
            thumbnail: 'https://img.youtube.com/vi/2gl4zdZQOlE/0.jpg',
            title: 'Video 2'
        },
        {
            id: 'pFrku5qYc_U',
            thumbnail: 'https://img.youtube.com/vi/pFrku5qYc_U/0.jpg',
            title: 'Video 3'
        },
        {
            id: 'C2bfoaNwq7A',
            thumbnail: 'https://img.youtube.com/vi/C2bfoaNwq7A/0.jpg',
            title: 'Video 4'
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    const openVideo = (videoId: any) => {
        setSelectedVideo(videoId);
    };

    const closeVideo = () => {
        setSelectedVideo(null);
    };

    return (
        <div className="bg-orange-50 py-6">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-3xl font-bold text-center mb-6">Featured In</h2>
                <div className="relative">
                    <div className="flex overflow-x-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (window.innerWidth < 768 ? 100 : 25)}%)`
                            }}
                        >
                            {videos.map((video) => (
                                <div
                                    key={video.id}
                                    className="w-full md:w-1/4 flex-shrink-0 px-2 md:px-3"
                                >
                                    <div
                                        className="relative cursor-pointer group aspect-video"
                                        onClick={() => openVideo(video.id)}
                                    >
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full rounded-lg shadow-md object-cover"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                                            <svg
                                                className="w-12 h-12 md:w-16 md:h-16 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M8 5v10l8-5-8-5z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md z-10"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md z-10"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>
            </div>

            {/* Modal for selected video */}
            {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-4 rounded-lg w-full max-w-3xl">
                        <div className="relative aspect-video">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${selectedVideo}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <button
                            onClick={closeVideo}
                            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeaturedVideos;