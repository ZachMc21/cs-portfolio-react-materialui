import { createTheme } from '@mui/material/styles';
import { grey, cyan } from '@mui/material/colors';

declare module '@mui/material/styles' {
	interface Palette {
		custom: Palette['primary'];
	}
	interface PaletteOptions {
		custom?: PaletteOptions['primary'];
	}
}

const homeThemeLight = createTheme({
    spacing: 8,
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
		dark: true,
	},
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
export default homeThemeLight;