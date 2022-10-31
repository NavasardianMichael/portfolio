export enum E_THEME {
    light = 'light', 
    dark = 'dark', 
}

export enum E_THEME_PARAMS {
    primary = 'primary',
    primaryLight = 'primaryLight',
    secondary = 'secondary', 
    tertiary = 'tertiary', 
    quaternary = 'quaternary', 
    text = 'text', 
    contrast = 'contrast',
    contrastDark = 'contrastDark'
}

export const THEMES: {
    [key in E_THEME]: {
        [key in E_THEME_PARAMS]: string
    }
} = {
    [E_THEME.light]: {
        primary: '#ffff',
        primaryLight: '#ffffffe6',
        secondary: '#040b14',
        tertiary: '#ffff',
        quaternary: '#173b6c',
        text: '#2c2f3f',
        contrast: '#149ddd',
        contrastDark: '#173b6c'
    },
    [E_THEME.dark]: {
        primary: '#040b14',
        primaryLight: '#ffff',
        secondary: '#ffff',
        tertiary: '#212431',
        quaternary: '#173b6c',
        text: '#ffff',
        contrast: '#149ddd',
        contrastDark: '#173b6c'
    },
}