import { createTheme, PaletteMode } from "@mui/material";
import { THEMES } from "helpers/constants/theme";

export const getDesignTokens = (mode: PaletteMode) => {
  return createTheme({
    typography: {
      fontFamily: 'Montserrat, serif'
    },
    palette: {
      mode,
      primary: {
        light: THEMES.light.primary,
        main: THEMES.light.primary,
        dark: THEMES.dark.primary,
      },
      secondary: {
        light: THEMES.dark.primary,
        main: THEMES.dark.primary,
        dark: THEMES.light.primary,
      },
    },
  })
}