import { createContext, FC, useState } from "react";

export const MobileMenuContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([
  false,
  () => null
])

type T_Props = {
  children: JSX.Element
}

export const MobileMenuProvider: FC<T_Props> = ({children}) => {
  return (
    <MobileMenuContext.Provider value={useState(false)}>
      {children}
    </MobileMenuContext.Provider>
  )
}