export enum E_THEME {
    light= 'light', 
    dark= 'dark', 
}

export enum E_THEME_PARAMS {
    primary = 'primary', 
    secondary = 'secondary', 
    tertiary = 'tertiary', 
    quaternary = 'quaternary', 
    text = 'text', 
}

export const THEMES: {
    [key in E_THEME]: {
        [key in E_THEME_PARAMS]: string
    }
} = {
    [E_THEME.light]: {
        primary: '#040b14',
        secondary: '#2c2f3f',
        tertiary: '#149ddd',
        quaternary: '#173b6c',
        text: '#ffff',
    },
    [E_THEME.dark]: {
        primary: '#ffff',
        secondary: '#2c2f3f',
        tertiary: '#149ddd',
        quaternary: '#173b6c',
        text: '#040b14',
    },
}