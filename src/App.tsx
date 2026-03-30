import { ThemeProvider } from '@mui/material/styles';

import './App.css'
import homeLight from "./styles/homeLight";

import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";
import { Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={homeLight}>
        <Box className="App">
            <RouterProvider router={router} />
        </Box>
        
    </ThemeProvider>
  );
}

export default App
