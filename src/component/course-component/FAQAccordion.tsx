import { Plus } from 'lucide-react';
import { useState } from 'react'

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

const faqData: FAQItem[] = [
    {
        question: 'Is this course online or offline?',
        answer: "Yes, this course is entirely online. You will receive recorded sessions and access to doubt-solving workshops. Additionally, there will be a live workshop."
    },
    {
        question: 'Is there an age limit for this course?',
        answer: "No, there is no age limit. This course is beneficial for anyone who wants to start or grow their business."
    },
    {
        question: "Is there lifetime access to the course?",
        answer: "Yes, you will have lifetime access to this course on how to start and grow a business."
    },
    {
        question: "Can this course be accessed on mobile?",
        answer: "Yes, you can access this course on any device, including mobile, laptop, or tablet."
    },
    {
        question: "Will I receive a certificate upon course completion?",
        answer: "Yes, you will receive a certificate after completing the course."
    },
    {
        question: "Can I download the worksheets in the course?",
        answer: "Yes, you can download all the worksheets provided in this course."
    },
    {
        question: "Can this course be accessed at any time?",
        answer: "Yes, you can access this course anytime that is convenient for you."
    },
    {
        question: "Is the course only available online? Can I download the videos if I have network issues?",
        answer: "Yes, the course is online only, and video downloads are not available. A stable network connection is required. However, you can download the worksheets to solve them offline."
    },
    {
        question: "Will I get personal guidance from Sagar Sir if I enroll in this course?",
        answer: "Yes, you will receive complete guidance from Sagar Sir in this course. You can directly ask questions during the online workshop and also reach out via email."
    },
    {
        question: "Can I join the course without an email?",
        answer: "No, an email address is required to join the course."
    },
    {
        question: "How do I join the course?",
        answer: "For more information on how to join the course, please check this [demo video](https://youtu.be/UWUllzpfLho)."
    },
    {
        question: "Is there a WhatsApp support number for course members?",
        answer: "We do not have a WhatsApp support number. If you have any questions, feel free to reach out via email or the doubt session provided with the course."
    },
    {
        question: "I've made the payment; how do I start the course?",
        answer: "You can watch the [demo video](https://youtu.be/UWUllzpfLho) to understand how to access the course."
    }
]

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="w-full max-w-4xl mx-auto p-6 space-y-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">
                FREQUENTLY ASKED QUESTIONS
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
