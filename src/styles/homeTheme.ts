
import { createTheme } from "@mui/material/styles";
import { blue, indigo } from '@mui/material/colors';
import typography from './typography.ts';

const homeTheme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                background: {
                    default: "#dff6f7",
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
    typography,
});

export default homeTheme;