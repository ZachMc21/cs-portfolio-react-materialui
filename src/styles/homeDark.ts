import { blue, indigo } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const homeDark = createTheme({
    palette: {
        background: {
            default: "#1e365bff",
        },
        primary: {
            main: "#d1e2faff",
            contrastText: blue[200],
        },
        secondary: {
            main: indigo[500],
            contrastText: indigo[100], 
        }
    }
});

export default homeDark