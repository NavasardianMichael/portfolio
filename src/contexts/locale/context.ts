import { E_LOCALES, LOCALES } from "helpers/constants/locale"
import { createContext } from "react"

export const LocaleContext = createContext<{
    locale: E_LOCALES
    toggleLocale: () => void
}>({
    locale: LOCALES[0],
    toggleLocale: () => null,
})