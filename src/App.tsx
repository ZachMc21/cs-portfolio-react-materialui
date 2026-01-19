import { ThemeProvider } from '@mui/material/styles';

import './App.css'
import homeTheme from "./styles/homeTheme";

import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={homeTheme}>
        <div className="App">
            <RouterProvider router={router} />
        </div>
        
    </ThemeProvider>
  );
}

export default App
