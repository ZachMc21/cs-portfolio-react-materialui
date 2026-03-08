
import { createTheme } from "@mui/material/styles";
import { cyan, grey, indigo } from '@mui/material/colors';
import typography from './typography.ts';
import { Light } from "@mui/icons-material";

const csTheme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                background: {
                    default: '#F0EAC5',
                },
                primary: {
                    main: '#ACACDE',
                    dark: '#464671ff',
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
    /* TODO move this into its own file? */
    typography: {
        fontFamily: ['aller', 'sans-serif'].join(','),
        allVariants: {
            fontWeight: "regular",
        },
        title: {
            fontFamily: ['eightgon', 'sans-serif'].join(','),
            fontWeight: "regular",
            textAlign: "center",
        },
        subtitle: {
            fontFamily: ['eightgon', 'sans-serif'].join(','),
            fontWeight: "regular",
            fontStyle: "italic",
            textAlign: "center",
        },
        cs_subtitle: {
            fontFamily: ['eightgon', 'sans-serif'].join(','),
            fontWeight: 300,
            fontSize: "3rem",
            textAlign: "center",
            color: "#2024457F"
        },
        h1: {
            fontFamily: ['eightgon', 'sans-serif'].join(','),
            fontWeight: "regular",
            fontSize: "2rem",
        },
    },
    spacing: 8,
});

export default csTheme;