import { FC, PropsWithChildren, useMemo, useState } from 'react'
import { LOCALES } from 'helpers/constants/locale'
import { LocaleContext } from './context'

const LocaleContextProvider: FC = ({ children }) => {
  const [currentLocaleIndex, setCurrentLocaleIndex] = useState(0)

  const value = useMemo(
    () => ({
      locale: LOCALES[currentLocaleIndex],
      toggleLocale: () => {
        setCurrentLocaleIndex((prev) => (LOCALES[prev + 1] ? prev + 1 : 0))
      },
    }),
    [currentLocaleIndex]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export default LocaleContextProvider
