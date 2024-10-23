import { useTranslation } from '../contexts/translationContext';

const LanguageSwitcher = () => {
    const { currentLanguage, setLanguage, isTranslating } = useTranslation();

    return (
        <button
            onClick={() => setLanguage(currentLanguage === 'en' ? 'mr' : 'en')}
            disabled={isTranslating}
            className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 
                 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-all
                 disabled:opacity-50 border border-gray-200"
        >
            {/* Language Text */}
            <span className="text-sm font-medium">
                {currentLanguage === 'en' ? 'English' : 'मराठी'}
            </span>

            {/* Loading Indicator */}
            {isTranslating && (
                <div className="animate-spin h-4 w-4 border-2 border-orange-500 rounded-full border-t-transparent" />
            )}
        </button>
    );
};

export default LanguageSwitcher;