import { ThemeProvider } from '@mui/material/styles';

import './App.css'
import homeTheme from "./styles/homeTheme";

import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";
import { Container } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={homeTheme}>
        <Container maxWidth={false} className="App">
            <RouterProvider router={router} />
        </Container>
        
    </ThemeProvider>
  );
}

export default App
