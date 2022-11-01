import { useMemo } from 'react'
import { E_LOCALES, LOCALES } from "constants/locale";
import { createContext, FC, useState } from "react";

export const LocaleContext = createContext<{
    locale: E_LOCALES
    toggleLocale: () => void
}>({
    locale: LOCALES[0],
    toggleLocale: () => null
})

type T_Props = {
  children: JSX.Element
}

export const LocaleProvider: FC<T_Props> = ({children}) => {

    const [ currentLocaleIndex, setCurrentLocaleIndex ] = useState(0)

    const value = useMemo(() => ({
        locale: LOCALES[currentLocaleIndex],
        toggleLocale: () => {
            setCurrentLocaleIndex(prev => LOCALES[prev + 1] ? prev + 1 : 0)
        }
    }), [currentLocaleIndex])

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}