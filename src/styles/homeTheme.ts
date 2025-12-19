
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
                    main: "#7DC6C3",
                    contrastText: "#0B1D23",
                },
                secondary: {
                    main: "#E3ACA0",
                    contrastText: "#0B1D23", 
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