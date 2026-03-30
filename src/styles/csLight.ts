import { cyan } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const csLight = createTheme({
    palette: {
        background: {
            default: '#dff6f7ff',
        },
        primary: {
            main: '#c3e8ed',
            light: cyan[50],
            dark: '#7ca6abff',
            contrastText: '#165057ff',
        },
        secondary: {
            main: '#6C7EDA',
            dark: '#292f56ff',
            light: '#c4ccf7',
            contrastText: '#4d1aabff',
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
});

export default csLight