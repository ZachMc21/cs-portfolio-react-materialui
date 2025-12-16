
import { createTheme } from "@mui/material/styles";
import { blue, cyan, grey, indigo } from '@mui/material/colors';
import typography from './typography.ts';

const csTheme = createTheme({
    colorSchemes: {
        light: {
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
                },
            }
        },
        dark: {
            palette: {
                background: {
                    default: '#373e71ff',
                },
                primary: {
                    main: '#c4ccf7ff',
                    dark: '#202445ff',
                    contrastText: '#5f34d6ff',
                },
                secondary: {
                    main: indigo[500],
                    contrastText: indigo[100], 
                }
            }
        }
    },
    typography,
});

export default csTheme;