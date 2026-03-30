
import { createTheme } from "@mui/material/styles";
import { blue, indigo } from '@mui/material/colors';
import typography from "../styles/typography";

const homeTheme = createTheme({
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
});

export default homeTheme;