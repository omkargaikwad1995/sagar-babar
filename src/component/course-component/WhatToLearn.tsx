import { useEffect, useRef } from 'react';
import BusinessIcon from '../../assets/icons/Group 1000006526.svg';
import MarketResearchIcon from '../../assets/icons/Group 1000006525.svg';
import CashFlowIcon from '../../assets/icons/Group 1000006527.svg';
import MarketingIcon from '../../assets/icons/Group 1000006528.svg';
import CustomerServiceIcon from '../../assets/icons/Group 1000006525.svg';

const WhatYoullLearn = () => {
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('translate-y-0', 'opacity-100');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        cardsRef.current.forEach((card) => {
            if (card) {
                observer.observe(card);
                card.classList.add('translate-y-[100px]', 'opacity-0');
            }
        });

        return () => observer.disconnect();
    }, []);

    const cards = [
        {
            icon: BusinessIcon,
            title: "Business Planning & Strategy",
            description: "Learn how to create a solid business plan and develop effective strategies."
        },
        {
            icon: MarketResearchIcon,
            title: "Market Research & Niche Identification",
            description: "Discover techniques for market analysis and finding your unique niche."
        },
        {
            icon: CashFlowIcon,
            title: "Cash flow Management",
            description: "Master the essentials of managing your business finances effectively."
        },
        {
            icon: MarketingIcon,
            title: "Marketing & Sales Growth",
            description: "Explore strategies to boost your marketing efforts and increase sales."
        },
        {
            icon: CustomerServiceIcon,
            title: "Customer Service Excellence",
            description: "Learn how to provide outstanding customer service to retain and grow your client base."
        }
    ];

    return (
        <section className="min-h-screen relative">
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
                {/* Left side - Sticky Heading */}
                <div className="w-full lg:w-1/2 px-4 lg:min-h-screen  lg:mb-0">
                    <div className="lg:sticky lg:top-1/3 p-4 lg:p-6">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                            What <br className="hidden lg:block" />
                            <span className="text-orange-500">You'll Learn</span>
                        </h2>
                        <p className="text-gray-600 text-base lg:text-lg">
                            In this course on "How to Start a Business," you'll learn to create a solid business plan,
                            conduct market research, and identify your niche. Master cash flow management and explore
                            effective marketing and sales strategies. Additionally, discover how to provide excellent
                            customer service to retain and grow your client base.
                        </p>
                    </div>
                </div>

                {/* Right side - Scrolling Cards */}
                <div className="w-full lg:w-1/3 px-4 mb-16 md:mb-16 lg:px-6">
                    <div className="space-y-2 lg:space-y-0">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                ref={el => {
                                    if (el) {
                                        cardsRef.current[index] = el;
                                    }
                                }}
                                className="border p-4 lg:p-6 rounded-lg bg-white shadow-lg
                                         transform transition-all duration-700 ease-in
                                         lg:sticky"
                                style={{
                                    top: `${index * 32}px`,
                                    zIndex: index + 1 // Reverse stacking order
                                }}
                            >
                                <div className=" flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-6">
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className="w-12 bg-blue-900 p-2 rounded-sm h-12 shrink-0"
                                    />
                                    <div className="text-center sm:text-left">
                                        <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                                        <p className="text-sm text-gray-600">{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatYoullLearn;