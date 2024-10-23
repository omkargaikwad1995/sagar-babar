// src/services/translationService.ts
class TranslationService {
    private static instance: TranslationService;
    private cache: Map<string, string>;
    private readonly MYMEMORY_API = 'https://api.mymemory.translated.net/get';

    private constructor() {
        this.cache = new Map();
    }

    static getInstance() {
        if (!TranslationService.instance) {
            TranslationService.instance = new TranslationService();
        }
        return TranslationService.instance;
    }

    async translate(text: string, targetLang: string): Promise<string> {
        try {
            // Check cache
            const cacheKey = `${text}:${targetLang}`;
            if (this.cache.has(cacheKey)) {
                return this.cache.get(cacheKey)!;
            }

            // Make API request
            const response = await fetch(
                `${this.MYMEMORY_API}?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
            );

            const data = await response.json();
            const translatedText = data.responseData.translatedText;

            // Cache the result
            this.cache.set(cacheKey, translatedText);
            return translatedText;
        } catch (error) {
            console.error('Translation error:', error);
            return text; // Return original text if translation fails
        }
    }
}

export const translationService = TranslationService.getInstance();