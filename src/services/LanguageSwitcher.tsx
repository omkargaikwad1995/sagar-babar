import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

type LanguageType = 'en' | 'mr';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = (): void => {
        const newLang: LanguageType = i18n.language === 'en' ? 'mr' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    // Get the opposite language name
    const getOppositeLanguageName = (): string => {
        return i18n.language === 'en' ? 'मराठी' : 'English';
    };

    return (
        <li className="mb-8 lg:mb-0 lg:ml-6">
            <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-white hover:text-orange-500 transition duration-300"
            >
                <Globe size={20} />
                <span>{getOppositeLanguageName()}</span>
            </button>
        </li>
    );
};

export default LanguageSwitcher;