import { useEffect, useRef } from 'react';
import BusinessIcon from '../../assets/icons/Group 1000006526.svg';
import MarketResearchIcon from '../../assets/icons/Group 1000006525.svg';
import CashFlowIcon from '../../assets/icons/Group 1000006527.svg';
import MarketingIcon from '../../assets/icons/Group 1000006528.svg';
import CustomerServiceIcon from '../../assets/icons/Group 1000006525.svg';
import { useTranslation } from 'react-i18next';

const WhatYoullLearn = () => {
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const { t, i18n } = useTranslation();

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

    const getFontClass = () => {
        return i18n.language === 'mr'
            ? 'font-marathi' // Class for Marathi font
            : 'font-sans'; // Default font for English
    };

    const cards = [
        {
            icon: BusinessIcon,
            title: t('businessTitle'),
            description: t('businessDescription')
        },
        {
            icon: MarketResearchIcon,
            title: t('marketResearchTitle'),
            description: t('marketResearchDescription')
        },
        {
            icon: CashFlowIcon,
            title: t('cashFlowTitle'),
            description: t('cashFlowDescription')
        },
        {
            icon: MarketingIcon,
            title: t('marketingTitle'),
            description: t('marketingDescription')
        },
        {
            icon: CustomerServiceIcon,
            title: t('customerServiceTitle'),
            description: t('customerServiceDescription')
        }
    ];

    return (
        <section className="min-h-screen relative">
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
                {/* Left side - Sticky Heading */}
                <div className="w-full lg:w-1/2 px-4 lg:min-h-screen  lg:mb-0">
                    <div className="lg:sticky lg:top-1/3 p-4 lg:p-6">
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 ${getFontClass()}`}>
                            {t('whatYoullLearnHeading1')} <br className="hidden lg:block" />
                            <span className="text-orange-500 block mt-2 sm:mt-3 lg:mt-4">
                                {t('whatYoullLearnHeading2')}
                            </span>
                        </h2>
                        <p className="text-gray-600 text-base lg:text-lg">
                            {t('whatYoullLearnDescription')}
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
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-6">
                                    <div className="flex flex-col items-center sm:items-start">
                                        <img
                                            src={card.icon}
                                            alt={card.title}
                                            className="w-20 md:w-24 bg-blue-900 p-1 rounded-sm h-16 md:h-18 shrink-0 mb-3 sm:mb-0"
                                        />
                                    </div>
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