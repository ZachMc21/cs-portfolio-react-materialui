
import { createTheme } from "@mui/material/styles";

const musicDbTheme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                background: {
                    default: '#a7c4c2',
                },
                primary: {
                    main: '#104547',
                },
                secondary: {
                    main: '#464671ff',
                },
            }
        },
        dark: {
            palette: {
                background: {
                    default: '#104547',
                },
                primary: {
                    main: '#a7c4c2',
                },
                secondary: {
                    main: '#2c1116',
                    contrastText: '#af7595', 
                }
            }
        }
    },
    /* TODO move this into its own file? */
    typography: {
        fontFamily: ['maskingrenata', 'serif'].join(','),
        allVariants: {
            fontWeight: "regular",
        },
    },
    spacing: 8,
});

export default musicDbTheme;