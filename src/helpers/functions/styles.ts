import { PaletteMode } from "@mui/material";
import { E_THEME_PARAMS, THEMES } from "helpers/constants/theme";

export const setCssVariables = (mode: PaletteMode) => {
    const styles = document.documentElement.style
    const keys = Object.keys(THEMES[mode]) as (keyof typeof E_THEME_PARAMS)[]
    keys.forEach((prop: keyof typeof E_THEME_PARAMS) => {
        styles.setProperty(`--${prop}`, THEMES[mode][prop]);
    })
}