import { THEMES, E_THEME_PARAMS } from "constants/theme"
import { PaletteMode } from "@mui/material";

export const setCssVariables = (mode: PaletteMode) => {
    const styles = document.documentElement.style
    const keys = Object.keys(THEMES[mode]) as (keyof typeof E_THEME_PARAMS)[]
    keys.forEach((prop: keyof typeof E_THEME_PARAMS) => {
        styles.setProperty(`--${prop}`, THEMES[mode][prop]);
    })
}