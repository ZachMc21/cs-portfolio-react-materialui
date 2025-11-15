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

const lightThemeSettings = createTheme({
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 640,
			laptop: 1024,
			desktop: 1200,
		},
	},
	cssVariables: true,
	palette: {
		background: {
			default: '#dff6f7ff',
		},
		primary: {
			main: '#6C7EDA',
			dark: '#373e71ff',
			light: '#c4ccf7ff',
			contrastText: '#5f34d6ff',
		},
		secondary: {
			main: '#c3e8ed',
			light: cyan[50],
			dark: '#afd6db',
			contrastText: grey[800],
		}
	}
});

/*
const darkThemeSettings = createTheme({
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
			/*contrastText: indigo[100], 
		}
	},
}, globalTheme);

export default { lightThemeSettings , darkThemeSettings };
*/
export default lightThemeSettings;