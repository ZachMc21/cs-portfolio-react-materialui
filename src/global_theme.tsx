import { createTheme, type ThemeOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    mobile: true; // adds custom breakpoints
    tablet: true;
    laptop: true;
    desktop: true;
    xs: false; // removes the default breakpoints
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}

const globalTheme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
        },
    },
    colorSchemes: {
        light: true,
        dark: true,
    },
    cssVariables: true,
});

export default globalTheme;