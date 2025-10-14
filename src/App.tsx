import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, CssBaseline } from '@mui/material';
import Grid from '@mui/system/Grid';

import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';
import { StyledEngineProvider } from "@mui/material";

import './App.css'
import homepageTheme from './theme';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import HomepageButton from './custom_components/homepage_button';



function App() {
    const homeTheme = homepageTheme;

    return (
        <div>
            
        <CssBaseline />
        <ThemeProvider theme={homeTheme}>
        <Emotion10ThemeProvider theme={homeTheme}>
        <StyledEngineProvider>

        <Box id="homepage" sx={{ backgroundColor: homeTheme.palette.background.default }}>
            <Card sx={{ p: 5, mb: 10, backgroundColor: homeTheme.palette.primary.light }}>
                <CardContent>
                    { /* This text color should be very dark blue */ }
                    <Typography id="page-title" sx={{ fontSize: 52, color: homeTheme.palette.primary.contrastText }}>
                        Zach Magloughlin
                    </Typography>
                </CardContent>
            </Card>
            <Grid container id="home_buttons" spacing={4}>
                <Grid size={{ mobile: 12, tablet: 6, laptop: 3, desktop: 3 }}>
                    <HomepageButton variant="contained" disableElevation >
                        <Typography>Enter CS Portfolio </Typography>
                        <DoubleArrowIcon />
                    </HomepageButton>
                </Grid>
                <Grid size={{ mobile: 12, tablet: 6, laptop: 3, desktop: 3 }}>
                    <HomepageButton variant="contained" disableElevation>
                        <Typography>Enter Photography Portfolio</Typography>
                        <DoubleArrowIcon />
                    </HomepageButton>
                </Grid>
                <Grid size={{ mobile: 12, tablet: 6, laptop: 3, desktop: 3 }}>
                    <HomepageButton variant="contained" disableElevation>
                        <Typography>Enter D&DoWolf Wiki </Typography>
                        <DoubleArrowIcon />
                    </HomepageButton>
                </Grid>
                <Grid size={{ mobile: 12, tablet: 6, laptop: 3, desktop: 3 }}>
                    <HomepageButton variant="contained" disableElevation>
                        <Typography>Enter Music Database </Typography>
                        <DoubleArrowIcon />
                    </HomepageButton>
                </Grid>
            </Grid> {/* end of homepage buttons */}
        </Box>

        </StyledEngineProvider>
        </Emotion10ThemeProvider>
        </ThemeProvider>
        </div>
    )
}

export default App
