
import { createTheme } from "@mui/material/styles";
import { cyan, grey, indigo } from '@mui/material/colors';
import typography from './typography.ts';

const csTheme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                background: {
                    default: '#F0EAC5',
                },
                primary: {
                    main: '#ACACDE',
                    contrastText: '#5f34d6ff',
                },
                secondary: {
                    main: '#ABDAFC',
                    light: "#E5FCFF",
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