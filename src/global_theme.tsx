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

const globalTheme: ThemeOptions = {
  colorSchemes: {
    light: true,
    dark: true,
  },
};

export default globalTheme;