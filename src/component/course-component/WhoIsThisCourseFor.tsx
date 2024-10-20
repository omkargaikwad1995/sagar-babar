import icon4 from '../../assets/icons/Business Owner.svg'
import icon5 from '../../assets/icons/group-of-businessmen-svgrepo-com 1.svg'
import icon6 from '../../assets/icons/business-svgrepo-com 1.svg'

const WhoIsThisCourseFor = () => (
    <section className="px-4 sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
                <h2 className="text-xl sm:text-2xl lg:text-3xl items-center flex justify-center font-bold">
                    Who <span className="text-orange-500">is this course for?</span>
                </h2>
            </div>

            <div className="lg:w-3/4">
                <div className="flex flex-col  sm:flex-row gap-4">
                    <div className="bg-blue-100 space-y-12 p-4 rounded-lg text-center border border-blue-900 flex-1">
                        <span className="text-3xl sm:text-4xl mb-2 block">
                            <img src={icon4} alt="Market Research" className="w-14 p-1 bg-orange-200 rounded-full  h-14" />
                        </span>
                        <p className="font-bold text-sm sm:text-base">Small business owners</p>
                    </div>
                    <div className="bg-blue-100 p-4 space-y-12 rounded-lg border border-blue-900 text-center flex-1">
                        <span className="text-3xl sm:text-4xl mb-2 block">
                            <img src={icon5} alt="Market Research" className="w-14 p-1 bg-orange-200 rounded-full h-14" />
                        </span>
                        <p className="font-bold text-sm sm:text-base">Aspiring entrepreneurs</p>
                    </div>
                    <div className="bg-blue-100 p-4 space-y-12 rounded-lg border border-blue-900 text-center flex-1">
                        <span className="text-3xl sm:text-4xl mb-2 block">
                            <img src={icon6} alt="Market Research" className="w-14 p-1 bg-orange-200 rounded-full  h-14" />
                        </span>
                        <p className="font-bold text-sm sm:text-base">Looking to start Business</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default WhoIsThisCourseFor;