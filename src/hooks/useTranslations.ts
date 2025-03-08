import { useContext } from 'react'
import { E_TRANSLATIONS, TRANSLATIONS } from 'helpers/constants/locale';
import { LocaleContext } from 'contexts/locale/context';

export const useTranslations = (keys: (Partial<keyof typeof E_TRANSLATIONS>)[]) => {
    const { locale } = useContext(LocaleContext)
    const result: Partial<typeof TRANSLATIONS[keyof typeof TRANSLATIONS]> = {}
    keys.forEach((key: keyof typeof E_TRANSLATIONS) => {
        result[key] = TRANSLATIONS[locale][key]
    })
    return result
}