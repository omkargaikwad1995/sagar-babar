import mentorImage from '../../assets/images/sb.png';
import bottomline from '../../assets/images/Group 370.png';

const MeetYourMentor = () => {
    return (
        <section className="bg-[#F5F7FF] sm:p-8 md:p-6">
            <div className="max-w-6xl mx-auto">
                {/* Added flex-col and order classes */}
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Content section - Now appears first on mobile */}
                    <div className="w-full md:w-2/3 p-5 order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Meet Your <span className="text-orange-500">Mentor
                                <img
                                    src={bottomline}
                                    className='ml-36 md:ml-44'
                                    height={100}
                                    width={100}
                                    alt=""
                                    loading="lazy"
                                />
                            </span>
                        </h2>
                        <div className="space-y-6">
                            <p className="text-gray-600">
                                Sagar Babar is an Entrepreneur, Business Coach, Educator, Author,
                                Meditation Practitioner and Content Creator. With over 20 years of
                                experience, he has mastered the art of learning, unlearning, and
                                applying business strategies that work. Over the years, he has successfully
                                created business models that deliver real results.
                            </p>
                            <p className="text-gray-600">
                                In addition to his business expertise, Sagar is a content creator with over 2
                                lakh followers. He shares content related to business to empower the Marathi
                                community, offering valuable insights to help people achieve success in their
                                entrepreneurial journeys.
                            </p>
                        </div>
                    </div>

                    {/* Profile Card section - Now appears second on mobile */}
                    <div className="w-full md:w-1/3 order-2 md:order-1">
                        <div className="p-4 relative">
                            <div className="mb-4">
                                <img
                                    src={mentorImage}
                                    alt="Sagar Babar"
                                    className="w-full rounded-xl"
                                    loading="lazy"
                                />
                            </div>

                            {/* Name and Title */}
                            <div className="text-center bg-blue-200 rounded-md p-6">
                                <h3 className="text-xl font-bold mb-1">Sagar Babar</h3>
                                <p className="text-gray-600 text-sm">CEO of Comsense Technology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetYourMentor;