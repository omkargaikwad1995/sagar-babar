import group1 from '../../assets/icons/Group 1000006536.svg';
import group2 from '../../assets/icons/Group 1000006537.svg';
import group3 from '../../assets/icons/Group 1000006530.svg';
import cover from '../../assets/images/Group 1000006557.png';

const WhyThisCourse = () => (
    <section className="relative min-h-[700px] md:min-h-[300px]">
        <img
            src={cover}
            alt=""
            className="w-full h-full absolute object-cover"
        />

        <div className="relative flex flex-col items-center p-4 sm:p-6 md:p-8 min-h-[400px] md:min-h-[400px]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center mt-8 md:mt-12">
                Why <span className="text-orange-500">this Course?</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-6xl mt-4 md:mt-8">
                <div className="bg-white/95 p-4 md:p-6 rounded-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-2 flex-1 border border-orange-500">
                    <span className="shrink-0">
                        <img
                            src={group3}
                            alt="Market Research"
                            className="w-16 sm:w-14 p-2 h-16 sm:h-24"
                        />
                    </span>
                    <p className="text-sm md:text-base text-center sm:text-left">
                        Actionable insights for real world business challenges
                    </p>
                </div>
                <div className="bg-white/95 p-4 md:p-6 rounded-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-2 flex-1 border border-orange-500">
                    <span className="shrink-0">
                        <img
                            src={group1}
                            alt="Market Research"
                            className="w-16 sm:w-14 p-2 h-16 sm:h-24"
                        />
                    </span>
                    <p className="text-sm md:text-base text-center sm:text-left">
                        Learn in simple Marathi, with examples relevant to local markets
                    </p>
                </div>
                <div className="bg-white/95 p-4 md:p-6 rounded-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-2 flex-1 border border-orange-500">
                    <span className="shrink-0">
                        <img
                            src={group2}
                            alt="Market Research"
                            className="w-16 sm:w-14 p-2 h-16 sm:h-24"
                        />
                    </span>
                    <p className="text-sm md:text-base text-center sm:text-left">
                        Accessible online, anytime, anywhere
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default WhyThisCourse;