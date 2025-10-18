import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, CssBaseline, Link } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider, ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';
import { StyledEngineProvider } from "@mui/material";

import './App.css'
import homepageTheme from './theme';
import CreateEmotionCache from './emotion_cache';

function App() {
    const clientSideEmotionCache = CreateEmotionCache();
    const lightTheme = createTheme(homepageTheme);
    console.log(lightTheme);

    return (
        <div>
            
        <CacheProvider value={clientSideEmotionCache}>
            <CssBaseline />
            <ThemeProvider theme={lightTheme}>
                <Box id="homepage" sx={{ backgroundColor: lightTheme.palette.background.default }}> {/* Pale light blue */}
                    <Card sx={{ p: 5, mb: 10, backgroundColor: lightTheme.palette.primary.light }}> {/* Less pale light blue */}
                        <CardContent>
                            <Typography id="page-title" sx={{ fontSize: 52, color: lightTheme.palette.primary.contrastText }}> {/* Very dark blue */}
                                Zach M
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </ThemeProvider>
        </CacheProvider>
        { /* <Emotion10ThemeProvider theme={lightTheme}>
        <StyledEngineProvider> */}


        { /*
        </StyledEngineProvider>
        </Emotion10ThemeProvider>
        </ThemeProvider> */ }

        </div>
    )
}

export default App
