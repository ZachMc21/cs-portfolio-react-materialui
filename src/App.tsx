import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, CssBaseline, Link } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider, ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';
import { StyledEngineProvider } from "@mui/material";

import './App.css'
import homepageTheme from './theme';

function App() {
    const homeTheme = createTheme(homepageTheme);
    console.log(homeTheme);

    return (
        <div>
            
            <CssBaseline />
            <ThemeProvider theme={homeTheme}>
                <Box id="homepage" sx={{ backgroundColor: homeTheme.palette.background.default }}> {/* Pale light blue */}
                    <Card sx={{ p: 5, mb: 10, backgroundColor: homeTheme.palette.primary.light }}> {/* Less pale light blue */}
                        <CardContent>
                            <Typography id="page-title" sx={{ fontSize: 52, color: homeTheme.palette.primary.contrastText }}> {/* Very dark blue */}
                                Maximus's Portfolio
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </ThemeProvider>
        { /* <Emotion10ThemeProvider theme={homeTheme}>
        <StyledEngineProvider> */}


        { /*
        </StyledEngineProvider>
        </Emotion10ThemeProvider>
        </ThemeProvider> */ }

        </div>
    )
}

export default App
