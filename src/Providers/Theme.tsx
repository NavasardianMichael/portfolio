import { FC } from "react"
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { THEMES } from "constants/theme";
import { setCssVariables } from "helpers/styles";

type T_Props = {
  children: JSX.Element
}

const theme = createTheme({
  palette: {
    primary: {
      light: THEMES.light.primary,
      main: THEMES.light.primary,
      dark: THEMES.dark.primary,
      contrastText: THEMES.dark.primary,
    },
    secondary: {
      light: THEMES.dark.primary,
      main: THEMES.dark.primary,
      dark: THEMES.light.primary,
      contrastText: THEMES.light.primary,
    },
  },
});

setCssVariables()

export const AppThemeProvider: FC<T_Props> = ({children}) => {
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    )
} 