import { useContext } from 'react'
import { E_TRANSLATIONS, TRANSLATIONS } from "constants/locale";
import { LocaleContext } from "Providers/Locale";

export const useTranslations = (keys: (Partial<keyof typeof E_TRANSLATIONS>)[]) => {
    const { locale } = useContext(LocaleContext)
    let result: Partial<typeof TRANSLATIONS[keyof typeof TRANSLATIONS]> = {}
    keys.forEach((key: keyof typeof E_TRANSLATIONS) => {
        result[key] = TRANSLATIONS[locale][key]
    })
    return result
}