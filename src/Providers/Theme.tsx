import { useMemo } from 'react'
import { createContext, Dispatch, FC, SetStateAction, useState } from "react"
import { PaletteMode } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { setCssVariables } from "helpers/styles";
import { getDesignTokens } from "helpers/theme";


export const ThemeActionsContext = createContext<Dispatch<SetStateAction<PaletteMode>>>(() => null)

type T_Props = {
  children: JSX.Element
}

export const AppThemeProvider: FC<T_Props> = ({children}) => {
  const [ mode, setMode ] = useState<PaletteMode>('dark')

  const theme = useMemo(() => {
    setCssVariables(mode)
    return getDesignTokens(mode)
  }, [mode])

  return (
    <ThemeActionsContext.Provider value={setMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeActionsContext.Provider>
  )
}