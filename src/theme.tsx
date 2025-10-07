import { createTheme } from '@mui/material/styles';
import { grey, blueGrey, blue, indigo, cyan } from '@mui/material/colors';
import globalTheme from './global_theme';

const homepageTheme = createTheme({
    ...globalTheme,
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