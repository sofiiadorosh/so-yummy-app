export const lightTheme = Object.freeze({
  fonts: {
    primary: 'Poppins, sans-serif',
    secondary: 'Montserrat, sans-serif',
    tertiary: 'Inter, sans-serif',
    quaternary: 'Helvetica, sans-serif',
  },
  fontSizes: [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 44, 48, 60, 72, 100],
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  colors: {
    primaryDarkText: '#23262A',
    secondaryDarkText: '#3E4462',
    tertiaryDarkText: '#001833',
    quaternaryDarkText: '#22252A',

    blackText: '#000000',

    primaryLightText: '#FAFAFA',
    secondaryLightText: '#e0e0e0',
    tertiaryLightText: '#BDBDBD',

    whiteText: '#ffffff',

    normalDark: '#1E1F28',
    normalGrey: '#D9D9D9',
    darkAccent: '#22252A',
    greenAccent: '#8BAA36',

    greenValidation: '#3CBC81',
    yellowValidation: '#F6C23E',
    redValidation: '#E74A3B',

    lightBackground: '#fafafa',
    whiteBackground: '#ffffff',
    primaryDarkBackground: '#1E1F28',
    primaryGreenBackground: '#EBF3D4',
    secondaryDarkBackground: '#22252A',
    switchBackground: '#efefef',
    formBackground: '#F0F0F0',

    line: '#e0e0e0',

    trashGreen: '#EBF3D4',
    searchBtnHover: '#22252A',
  },
});

export const darkTheme = Object.freeze({
  fonts: {
    primary: 'Poppins, sans-serif',
    secondary: 'Montserrat, sans-serif',
    tertiary: 'Inter, sans-serif',
    quaternary: 'Helvetica, sans-serif',
  },
  fontSizes: [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 44, 48, 60, 72, 100],
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  colors: {
    primaryDarkText: '#FAFAFA',
    secondaryDarkText: '#FAFAFA',
    tertiaryDarkText: '#FAFAFA',
    quaternaryDarkText: '#FAFAFA',

    blackText: '#FAFAFA',

    primaryLightText: '#FAFAFA',
    secondaryLightText: '#e0e0e0',
    tertiaryLightText: '#BDBDBD',
    textSubTitle: '#3E4462',
    backgroundAccent: '#EBF3D4',

    whiteText: '#ffffff',

    normalDark: '#1E1F28',
    normalGrey: '#D9D9D9',
    darkAccent: '#8BAA36',
    greenAccent: '#8BAA36',

    greenValidation: '#3CBC81',
    yellowValidation: '#F6C23E',
    redValidation: '#E74A3B',

    lightBackground: '#1E1F28',
    whiteBackground: '#2A2C36',
    primaryDarkBackground: '#1E1F28',
    primaryGreenBackground: '#1E1F28',
    secondaryDarkBackground: '#8BAA36',
    switchBackground: '#efefef',
    formBackground: 'rgba(250, 250, 250, 0.2)',

    line: '#e0e0e0',

    searchBtnHover: '#22252A',
    trashGreen: '#EBF3D4',
  },
});

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
