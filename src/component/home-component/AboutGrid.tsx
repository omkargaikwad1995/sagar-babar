import entrepreneurImage from '../../assets/images/Group 363.png';
import coachImage from '../../assets/images/Group 363.png';
import educatorImage from '../../assets/images/Group 363.png';
import speakerImage from '../../assets/images/Group 363.png';

const AboutGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
                { image: entrepreneurImage, alt: "Entrepreneur", title: "Entrepreneur", description: "Built his base on entrepreneurship and CEO of multiple companies." },
                { image: coachImage, alt: "Business Coach", title: "Business Coach", description: "Help you learn startup, funding, and business development." },
                { image: educatorImage, alt: "Educator", title: "Educator", description: "Taught 1000+ students entrepreneurship and startup skills." },
                { image: speakerImage, alt: "Speaker", title: "Speaker", description: "Spoke at 100+ events and motivate young entrepreneurs." }
            ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg flex flex-col justify-center items-center h-auto sm:h-52 border-2 border-orange-500 w-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                    <img
                        src={item.image}
                        alt={item.alt}
                        className="w-12 h-12 object-contain mb-2"
                    />
                    <div className='text-blue-900 text-center'>
                        <h3 className="font-bold mb-2 text-sm sm:text-base">{item.title}</h3>
                        <p className="text-xs sm:text-sm">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutGrid;