import { createTheme } from "@mui/material/styles"

const homeLight = createTheme({
    palette: {
        background: {
            default: "#d4dffaff",
        },
        primary: {
            main: "#a6b7d3",
            dark: "#899ebfff",
            contrastText: "#00375e",
        },
        secondary: {
            main: "#003b64",
            contrastText: "#0B1D23", 
        },
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
            fontSize: "3em",
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

export default homeLight