import { createTheme } from '@mui/material/styles';
import { grey, blueGrey, blue, indigo, cyan, red } from '@mui/material/colors';
import type { Color } from '@mui/material/styles';
import type { ButtonProps } from '@mui/material';
import globalTheme from './theme_global';

declare module '@mui/material/styles' {
	interface Palette {
		custom: Palette['primary'];
	}
	interface PaletteOptions {
		custom?: PaletteOptions['primary'];
	}
}

const photoPortfolioTheme = createTheme({
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 640,
			laptop: 1024,
			desktop: 1200,
		},
	},
	cssVariables: true,
	colorSchemes: {
        light: { 
            palette: {
                background: {
                    default: '#dff6f7ff',
                },
                primary: {
                    main: '#4d858aff',
                    dark: '#203840ff',
                    light: '#7dc6c3ff',
                    contrastText: '#0b1d23ff',
                },
                secondary: {
                    main: '#c3e8ed',
                    light: cyan[50],
                    dark: '#afd6db',
                    contrastText: grey[800],
                }
	        }
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
                    contrastText: indigo[100], 
                }
            } 
        }
	},
});

export default photoPortfolioTheme;