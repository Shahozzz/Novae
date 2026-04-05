import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations, type Language } from '../i18n/translations';

type I18nContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

type I18nProviderProps = {
  children: ReactNode;
};

const LANGUAGE_STORAGE_KEY = 'language';

export function I18nProvider({ children }: I18nProviderProps) {
  const getInitialLanguage = (): Language => {
    if (typeof window === 'undefined') return 'en';

    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (savedLanguage === 'en' || savedLanguage === 'fr' || savedLanguage === 'nl') {
      return savedLanguage;
    }

    return 'en';
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, String(language));
    }
  }, [language]);

  const value = useMemo<I18nContextType>(
    () => ({
      language,
      setLanguage,
      t: translations[language]
    }),
    [language]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }

  return context;
}
