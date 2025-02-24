import { useState, useEffect } from 'react';

const CursorBlurEffect = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Function to update cursor position
        const updateMousePosition = (e: any) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        // Function to handle when cursor leaves the window
        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        // Function to handle when cursor enters the window
        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        // Add event listeners
        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mouseenter', handleMouseEnter);

        // Clean up event listeners
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible]);

    return (
        <div
            className={`pointer-events-none fixed transition-opacity duration-300 ${isVisible ? 'opacity-40' : 'opacity-0'}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)',
                filter: 'blur(12px)',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0) 70%)',
                zIndex: 9999,
            }}
        />
    );
};

export default CursorBlurEffect;