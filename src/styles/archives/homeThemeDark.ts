import { createTheme } from "@mui/material/styles";

const homeThemeDark = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#0B1D23",
        },
        primary: {
            main: "#0B1D23",
            contrastText: "#7DC6C3",
        },
        secondary: {
            main: "#0B1D23",
            contrastText: "#E3ACA0", 
        }
    }
});

export default homeThemeDark;