import { Plus } from 'lucide-react';
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

interface FAQItem {
    question: string;
    answer: string;
}

const parseAnswer = (text: string) => {
    const parts = [];
    let lastIndex = 0;
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
        // Add text before the link
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }

        // Add the link component
        parts.push(
            <a
                key={match.index}
                href={match[2]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
            >
                {match[1]}
            </a>
        );

        lastIndex = match.index + match[0].length;
    }

    // Add any remaining text
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts;
};



const FAQAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { t } = useTranslation();
    const faqData: FAQItem[] = [
        {
            question: t('q1'),
            answer: t('a1')
        },
        {
            question: t('q2'),
            answer: t('a2')
        },
        {
            question: t('q3'),
            answer: t('a3')
        },
        {
            question: t('q4'),
            answer: t('a4')
        },
        {
            question: t('q5'),
            answer: t('a5')
        },
        {
            question: t('q6'),
            answer: t('a6')
        },
        {
            question: t('q7'),
            answer: t('a7')
        },
        {
            question: t('q8'),
            answer: t('a8')
        },
        {
            question: t('q9'),
            answer: t('a9')
        },
        {
            question: t('q10'),
            answer: t('a10')
        },
        {
            question: t('q11'),
            answer: t('a11')
        },
        {
            question: t('q12'),
            answer: t('a12')
        },
        {
            question: t('q13'),
            answer: t('a13')
        }
    ]
    return (
        <div className="w-full max-w-4xl mx-auto p-6 space-y-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">
                {t('faqTitle')}
            </h1>

            {faqData.map((faq, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                    <button
                        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        aria-expanded={openIndex === index}
                    >
                        <span className="font-semibold text-sm md:text-lg">{faq.question}</span>
                        <Plus
                            className={`transform text-orange-500 transition-transform duration-200 ease-in-out ${openIndex === index ? 'rotate-45' : ''
                                }`}
                            size={20}
                        />
                    </button>

                    <div
                        className={`grid transition-all duration-300 ease-in-out ${openIndex === index
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                            }`}
                    >
                        <div className="overflow-hidden">
                            <div className="p-4 text-sm md:text-lg text-gray-600">
                                {parseAnswer(faq.answer)}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FAQAccordion
