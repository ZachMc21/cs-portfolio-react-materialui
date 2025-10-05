import { createTheme } from '@mui/material/styles';
import { grey, blueGrey, blue, indigo, cyan } from '@mui/material/colors';

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
          main: blueGrey[300],
          dark: blueGrey[500],
          contrastText: blueGrey[900],
        },
        secondary: {
          main: cyan[50],
          contrastText: grey[900],
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