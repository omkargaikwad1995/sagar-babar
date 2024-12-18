import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    const reasons = [
        {
            title: t('reasonTitle1'),
            description: t('reasonDesc1'),
            isBlue: false
        },
        {
            title: t('reasonTitle2'),
            description: t('reasonDesc2'),
            isBlue: true
        },
        {
            title: t('reasonTitle3'),
            description: t('reasonDesc3'),
            isBlue: false
        },
        {
            title: t('reasonTitle4'),
            description: t('reasonDesc4'),
            isBlue: true
        }, {
            title: t('reasonTitle5'),
            description: t('reasonDesc5'),
            isBlue: false
        },
        {
            title: t('reasonTitle6'),
            description: t('reasonDesc6'),
            isBlue: true
        }
    ];

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-3xl font-bold text-center mb-8">{t('reasons')}</h2>
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