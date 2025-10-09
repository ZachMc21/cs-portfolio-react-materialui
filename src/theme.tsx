import { createTheme } from '@mui/material/styles';
import { grey, blueGrey, blue, indigo, cyan, red } from '@mui/material/colors';
import globalTheme from './global_theme';
import type { Color } from '@mui/material/styles';
import type { ButtonProps } from '@mui/material';

declare module '@mui/material/styles' {
    interface Palette {
        custom: Palette['primary'];
    }

    interface PaletteOptions {
        custom?: PaletteOptions['primary'];
    }
}

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
                    /*contrastText: blueGrey[100],*/
                    contrastText: red[500]
                },
                secondary: {
                    main: '#c3e8ed',
                    /*light: cyan[50],
                    dark: '#afd6db',
                    contrastText: grey[800],*/
                }
            },
        },
        dark: {
            palette: {
                background: {
                    default: blue[900]
                },
                primary: {
                    main: blue[900],
                    contrastText: blue[200],
                },
                secondary: {
                    main: indigo[500],
                    /*contrastText: indigo[100],*/
                }
            },
        },
    },
});

export default homepageTheme;