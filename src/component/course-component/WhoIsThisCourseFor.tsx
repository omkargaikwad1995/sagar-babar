import icon4 from '../../assets/icons/Business Owner.svg';
import icon5 from '../../assets/icons/group-of-businessmen-svgrepo-com 1.svg';
import icon6 from '../../assets/icons/business-svgrepo-com 1.svg';
import cover from '../../assets/images/Group 1000006557.png';

const WhoIsThisCourseFor = () => (
    <section className="relative min-h-[700px] md:min-h-[300px]">
        <img
            src={cover}
            alt=""
            className="absolute object-cover"
        />

        <div className="relative flex items-center justify-center py-8 px-4 sm:p-6 md:p-8 min-h-[400px] md:min-h-[400px]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full max-w-6xl gap-8 lg:gap-4">
                <div className="lg:w-1/2">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left font-bold">
                        Who <span className="text-orange-500">is this course for?</span>
                    </h2>
                </div>

                <div className="lg:w-3/4">
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
                        <div className="bg-white/90 p-6 rounded-lg text-center border border-blue-900 flex-1 backdrop-blur-sm">
                            <span className="block mb-6">
                                <img
                                    src={icon4}
                                    alt="Market Research"
                                    className="w-16 h-16 sm:w-14 sm:h-14 p-2 bg-orange-200 rounded-full mx-auto"
                                />
                            </span>
                            <p className="font-bold text-base sm:text-sm md:text-base">
                                Small business owners
                            </p>
                        </div>
                        <div className="bg-white/90 p-6 rounded-lg text-center border border-blue-900 flex-1 backdrop-blur-sm">
                            <span className="block mb-6">
                                <img
                                    src={icon5}
                                    alt="Market Research"
                                    className="w-16 h-16 sm:w-14 sm:h-14 p-2 bg-orange-200 rounded-full mx-auto"
                                />
                            </span>
                            <p className="font-bold text-base sm:text-sm md:text-base">
                                Aspiring entrepreneurs
                            </p>
                        </div>
                        <div className="bg-white/90 p-6 rounded-lg text-center border border-blue-900 flex-1 backdrop-blur-sm">
                            <span className="block mb-6">
                                <img
                                    src={icon6}
                                    alt="Market Research"
                                    className="w-16 h-16 sm:w-14 sm:h-14 p-2 bg-orange-200 rounded-full mx-auto"
                                />
                            </span>
                            <p className="font-bold text-base sm:text-sm md:text-base">
                                Looking to start Business
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default WhoIsThisCourseFor;