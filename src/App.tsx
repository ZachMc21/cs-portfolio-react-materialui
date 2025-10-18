import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, CssBaseline, Link } from '@mui/material';
import Grid from '@mui/system/Grid';

import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';
import { StyledEngineProvider } from "@mui/material";

import './App.css'
import homepageTheme from './theme';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import HomepageButton from './custom_components/homepage_button';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Enter from './Enter';
import CSPortfolio from './CSPortfolio';
{ /*
import DnDoWolfWiki from './DnDoWolfWiki';
import MusicDatabase from './MusicDatabase';
*/ }


function App() {
    const homeTheme = homepageTheme;

    return (
        <div>
            
        <CssBaseline />
        <ThemeProvider theme={homeTheme}>
        <Emotion10ThemeProvider theme={homeTheme}>
        <StyledEngineProvider>
        
        <Box id="homepage" sx={{ backgroundColor: homeTheme.palette.background.default }}> {/* Pale light blue */}
            <Card sx={{ p: 5, mb: 10, backgroundColor: homeTheme.palette.primary.light }}> {/* Less pale light blue */}
                <CardContent>
                    <Typography id="page-title" sx={{ fontSize: 52, color: homeTheme.palette.primary.contrastText }}> {/* Very dark blue */}
                        Zach Magloughlin
                    </Typography>
                </CardContent>
            </Card>
            <Grid container id="home_buttons" spacing={4}>
                <Grid size={{ mobile: 12, tablet: 6, laptop: 3, desktop: 3 }}>
                    <HomepageButton variant="contained" disableElevation href="/cs-portfolio">
                        <Typography>Enter CS Portfolio </Typography>
                        <DoubleArrowIcon />
                    </HomepageButton>
                </Grid>
                <Grid size={{ mobile: 12, tablet: 6, laptop: 3, desktop: 3 }}>
                    <HomepageButton variant="contained" disableElevation href="/photography-portfolio">
                        <Typography>Enter Photography Portfolio</Typography>
                        <DoubleArrowIcon />
                    </HomepageButton>
                </Grid>
                <Grid size={{ mobile: 12, tablet: 6, laptop: 3, desktop: 3 }}>
                    <HomepageButton variant="contained" disableElevation href="/dndowolf-wiki">
                        <Typography>Enter D&DoWolf Wiki </Typography>
                        <DoubleArrowIcon />
                    </HomepageButton>
                </Grid>
                <Grid size={{ mobile: 12, tablet: 6, laptop: 3, desktop: 3 }}>
                    <HomepageButton variant="contained" disableElevation href="/music-database">
                        <Typography>Enter Music Database </Typography>
                        <DoubleArrowIcon />
                    </HomepageButton>
                </Grid>
            </Grid> {/* end of homepage buttons */}
        </Box>

        </StyledEngineProvider>
        </Emotion10ThemeProvider>
        </ThemeProvider>

        { /*
        <Router>
            <Routes>
                <Route path='/' element={<Enter />} />
                <Route path="/cs-portfolio" element={<CSPortfolio />} />
                <Route path="/photography-portfolio" element={<PhotographyPortfolio />} />
                <Route path="/dndowolf-wiki" element={<DnDoWolfWiki />} />
                <Route path="/music-database" element={<MusicDatabase />} />
            </Routes>
        </Router>
        */ }
        </div>
    )
}

export default App
