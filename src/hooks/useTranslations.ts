import { useContext } from 'react'
import { TRANSLATIONS } from "constants/locale";
import { LocaleContext } from "Providers/Locale";

export const useTranslations = () => {
    const { locale } = useContext(LocaleContext)
    return TRANSLATIONS[locale];
}