import { createTheme } from '@mui/material/styles';
import { grey, blueGrey, blue, indigo, cyan } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the default breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds custom breakpoints
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const theme = createTheme({
  colorSchemes: {
    light: true,
    dark: true,
  },
});

const homepageTheme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: cyan[50],
        },
        primary: {
          main: '#3b4e6b',
          dark: '#212b3bff',
          contrastText: blueGrey[100],
        },
        secondary: {
          light: cyan[50],
          main: '#c3e8ed',
          dark: '#afd6db',
          contrastText: grey[800],
        }
      },
    },
    dark: {
      palette: {
        background: {
            
        },
        primary: {
          main: blue[900],
          contrastText: blue[200],
        },
        secondary: {
          main: indigo[500],
          contrastText: indigo[100],
        }
      },
    },
  },
});

export default homepageTheme;