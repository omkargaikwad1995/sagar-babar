import BusinessIcon from '../../assets/icons/Group 1000006526.svg';
import MarketResearchIcon from '../../assets/icons/Group 1000006525.svg';
import CashFlowIcon from '../../assets/icons/Group 1000006527.svg';
import MarketingIcon from '../../assets/icons/Group 1000006528.svg';
import CustomerServiceIcon from '../../assets/icons/Group 1000006525.svg';

const WhatYoullLearn = () => (
    <section className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
            What <span className="text-orange-500">You'll Learn</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="border border-orange-200 p-4 rounded-lg text-center flex flex-col items-center">
                <img src={BusinessIcon} alt="Business Planning" className="w-12 bg-blue-900 p-2 rounded-sm h-12 mb-2" />
                <h3 className="font-bold text-sm mb-2">Business Planning & Strategy</h3>
                <p className="text-xs text-gray-600">Learn how to create a solid business plan and develop effective strategies.</p>
            </div>

            <div className="border border-orange-200 p-4 rounded-lg text-center flex flex-col items-center">
                <img src={MarketResearchIcon} alt="Market Research" className="w-12 bg-blue-900 p-2 rounded-sm h-12 mb-2" />
                <h3 className="font-bold text-sm mb-2">Market Research & Niche Identification</h3>
                <p className="text-xs text-gray-600">Discover techniques for market analysis and finding your unique niche.</p>
            </div>

            <div className="border border-orange-200 p-4 rounded-lg text-center flex flex-col items-center">
                <img src={CashFlowIcon} alt="Cash Flow Management" className="w-12 bg-blue-900 p-2 rounded-sm h-12 mb-2" />
                <h3 className="font-bold text-sm mb-2">Cash flow Management</h3>
                <p className="text-xs text-gray-600">Master the essentials of managing your business finances effectively.</p>
            </div>

            <div className="border border-orange-200 p-4 rounded-lg text-center flex flex-col items-center">
                <img src={MarketingIcon} alt="Marketing and Sales" className="w-12 bg-blue-900 p-2 rounded-sm h-12 mb-2" />
                <h3 className="font-bold text-sm mb-2">Marketing & Sales Growth</h3>
                <p className="text-xs text-gray-600">Explore strategies to boost your marketing efforts and increase sales.</p>
            </div>

            <div className="border border-orange-200 p-4 rounded-lg text-center flex flex-col items-center">
                <img src={CustomerServiceIcon} alt="Customer Service" className="w-12 bg-blue-900 p-2 rounded-sm h-12 mb-2" />
                <h3 className="font-bold text-sm mb-2">Customer Service Excellence</h3>
                <p className="text-xs text-gray-600">Learn how to provide outstanding customer service to retain and grow your client base.</p>
            </div>
        </div>
    </section>
);

export default WhatYoullLearn;