import React, { useState } from 'react';

interface ReasonCardProps {
    number: number;
    title: string;
    description: string;
    isBlue: boolean;
}

const ReasonCard = ({ number, title, description, isBlue }: ReasonCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
    };

    const calculateRotation = () => {
        if (!isHovered) return 'rotateX(0deg) rotateY(0deg)';
        const { x, y } = mousePosition;
        const xAxis = (y / 150) * 5; // Max 15 degrees rotation
        const yAxis = -(x / 150) * 5; // Max 15 degrees rotation
        return `rotateX(${xAxis}deg) rotateY(${yAxis}deg) scale(0.97)`;
    };

    return (
        <div
            className={`p-12 rounded-lg shadow-md border-orange-500 border-2 transition-all duration-300 ease-out ${isBlue ? 'bg-blue-900 text-white' : 'bg-white text-gray-900'}`}
            style={{
                transform: calculateRotation(),
                transformStyle: 'preserve-3d',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setMousePosition({ x: 0, y: 0 });
            }}
            onMouseMove={handleMouseMove}
        >
            <div style={{ transform: 'translateZ(20px)' }}>
                <h3 className="text-xl font-semibold mb-2">{number}. {title}</h3>
                <p className={`text-sm ${isBlue ? 'text-gray-200' : 'text-gray-600'}`}>{description}</p>
            </div>
        </div>
    );
};

const ApproachReasons = () => {
    const reasons = [
        {
            title: "Starting your own business",
            description: "If you wish to start your own business but are unclear on how to methodically approach your vision, I can guide you through the process, making you aware of the finer nuances and aid you through your journey.",
            isBlue: false
        },
        {
            title: "Need motivation for your employees",
            description: "There is no better motivator than the one who has seen it, been through it, and survived it successfully. I conduct targeted sessions for motivating the employees and aiding them in enhancing their performance.",
            isBlue: true
        },
        {
            title: "Pondering over quitting that job to start on your own?",
            description: "Many of us wish to be entrepreneurs but most are stuck in the risks of quitting that steady job. If you have an idea but not enough courage to take the leap, I can help you provide transparent and constructive feedback and guidance on if, when, and how to take that leap.",
            isBlue: false
        },
        {
            title: "A failed business that you wish to restart",
            description: "Started a venture but it did not work? Worry not, I help businesses re-start and assist entrepreneurs become forward looking.",
            isBlue: true
        },
        {
            title: "Business on a plateau; need to tread the growth path",
            description: "All businesses reach a plateau but the only way to leave a legacy is to constantly endeavor a rising chart. I help entrepreneurs break the barriers and achieve phenomenal growth",
            isBlue: false
        },
        {
            title: "Seeking a Leadership Skills Speaker for Workplaces, Universities, or Specialized Forums?",
            description: "I enjoy sharing insights and practical experiences with emerging leaders to help them maximize their potential. My mission is to create 1,000 business leaders. If you need a speaker for a leadership session, feel free to reach out.",
            isBlue: true
        }
    ];

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Top 6 Reasons To Approach Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((reason, index) => (
                    <ReasonCard
                        key={index}
                        number={index + 1}
                        title={reason.title}
                        description={reason.description}
                        isBlue={reason.isBlue}
                    />
                ))}
            </div>
        </div>
    );
};

export default ApproachReasons;