// src/contexts/TranslationContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { translationService } from '../services/translationService';

interface TranslationContextType {
    currentLanguage: string;
    setLanguage: (lang: string) => void;
    translateText: (text: string) => Promise<string>;
    isTranslating: boolean;
}

const TranslationContext = createContext<TranslationContextType>({
    currentLanguage: 'en',
    setLanguage: () => { },
    translateText: async (text: string) => text,
    isTranslating: false,
});

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentLanguage, setCurrentLang] = useState('en');
    const [isTranslating, setIsTranslating] = useState(false);

    const translateText = async (text: string) => {
        if (currentLanguage === 'en') return text;
        setIsTranslating(true);
        try {
            const translated = await translationService.translate(text, currentLanguage);
            return translated;
        } catch (error) {
            console.error('Translation error:', error);
            return text;
        } finally {
            setIsTranslating(false);
        }
    };

    const setLanguage = (lang: string) => {
        setCurrentLang(lang);
    };

    return (
        <TranslationContext.Provider
            value={{
                currentLanguage,
                setLanguage,
                translateText,
                isTranslating
            }}
        >
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => useContext(TranslationContext);