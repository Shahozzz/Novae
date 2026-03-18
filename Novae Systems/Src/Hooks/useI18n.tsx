import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations, Language, TranslationData } from '../i18n/translations';

interface I18nContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationData;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
    // Try to detect browser language or use 'en' as default
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem('lang') as Language;
        if (saved && translations[saved]) return saved;
        const browserLang = navigator.language.split('-')[0] as Language;
        if (browserLang && translations[browserLang]) return browserLang;
        return 'en';
    });

    useEffect(() => {
        localStorage.setItem('lang', language);
        document.documentElement.lang = language;
    }, [language]);

    const value = {
        language,
        setLanguage,
        t: translations[language]
    };

    return (
        <I18nContext.Provider value={value}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}