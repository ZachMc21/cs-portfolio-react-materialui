import { createTheme } from '@mui/material/styles';
import { grey, blueGrey, blue, indigo } from '@mui/material/colors';

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
        primary: {
          main: grey[300],
          dark: grey[400],
          contrastText: grey[800],
        },
        secondary: {
          main: blueGrey[200],
          contrastText: blueGrey[700],
        }
      },
    },
    dark: {
      palette: {
        primary: {
          main: blue[200],
          contrastText: blue[800],
        },
        secondary: {
          main: indigo[100],
          contrastText: indigo[500],
        }
      },
    },
  },
});

export default homepageTheme;