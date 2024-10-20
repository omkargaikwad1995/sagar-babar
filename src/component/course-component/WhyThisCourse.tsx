import group1 from '../../assets/icons/Group 1000006536.svg';
import group2 from '../../assets/icons/Group 1000006537.svg';
import group3 from '../../assets/icons/Group 1000006530.svg';

const WhyThisCourse = () => (
    <section className="bg-blue-100 p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
            Why <span className="text-orange-500">this Course?</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-white p-4 rounded-lg flex items-center space-x-2 flex-1 border border-orange-500">
                <span className="text-2xl sm:text-3xl">
                    <img src={group3} alt="Market Research" className="w-14 p-2  h-24 mb-2" />

                </span>
                <p className="text-xs sm:text-sm">Actionable insights for real world business challenges</p>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center space-x-2 flex-1 border border-orange-500">
                <span className="text-2xl sm:text-3xl">
                    <img src={group1} alt="Market Research" className="w-14 p-2 h-24 mb-2" />
                </span>
                <p className="text-xs sm:text-sm">Learn in simple Marathi, with examples relevant to local markets</p>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center space-x-2 flex-1 border border-orange-500">
                <span className="text-2xl sm:text-3xl">
                    <img src={group2} alt="Market Research" className="w-14 p-2 h-24 mb-2" />
                </span>
                <p className="text-xs sm:text-sm">Accessible online, anytime, anywhere</p>
            </div>
        </div>
    </section>
);

export default WhyThisCourse;