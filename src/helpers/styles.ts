import { THEMES, E_THEME_PARAMS } from "constants/theme"

export const setCssVariables = () => {
    const styles = document.documentElement.style
    const keys = Object.keys(THEMES.light) as (keyof typeof E_THEME_PARAMS)[]
    keys.forEach((prop: keyof typeof E_THEME_PARAMS) => {
        console.log({prop});
        
        styles.setProperty(`--${prop}`, THEMES.light[prop]);
    })
}