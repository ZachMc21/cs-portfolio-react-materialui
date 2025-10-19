import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Container, CssBaseline, Link } from '@mui/material';
import Grid from '@mui/system/Grid';

import { ThemeProvider } from '@mui/material/styles';

import './App.css'
import homepageTheme from './themes/theme_home';

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
        <Container disableGutters sx={{ mx: 0, my: "auto" }}>
        <ThemeProvider theme={homeTheme}>
            <CssBaseline />
            
            <Box id="homepage" sx={{ backgroundColor: homeTheme.palette.background.default }}> {/* Pale light blue */}
                <Card sx={{ p: 5, mb: 10, backgroundColor: homeTheme.palette.primary.light }}> {/* Less pale light blue */}
                    <CardContent>
                        <Typography id="page-title" sx={{ fontSize: 52, color: homeTheme.palette.primary.contrastText }}> {/* Very dark blue */}
                            Zach Magloughlin
                        </Typography>
                    </CardContent>
                </Card>
                <div id="home-buttons-container">
                    <div className="home-buttons-row">
                        <HomepageButton href="/cs-portfolio" variant="contained" disableElevation>
                            <Typography>Enter CS Portfolio</Typography>
                            <DoubleArrowIcon />
                        </HomepageButton>
                        <HomepageButton href="/photography-portfolio" variant="contained" disableElevation>
                            <Typography>Enter Photography Portfolio</Typography>
                            <DoubleArrowIcon />
                        </HomepageButton>

                    </div>
                    <div className="home-buttons-row">
                        <HomepageButton href="/dndowolf-wiki" variant="contained" disableElevation>
                            <Typography>Enter D&DoWolf Wiki </Typography>
                            <DoubleArrowIcon />
                        </HomepageButton>
                        <HomepageButton href="/music-database" variant="contained" disableElevation>
                            <Typography>Enter Music Database </Typography>
                            <DoubleArrowIcon />
                        </HomepageButton>
                    </div>
                </div>
            </Box>

        </ThemeProvider>
        </Container>

        /*
        <Router>
            <Routes>
                <Route path='/' element={<Enter />} />
                <Route path="/cs-portfolio" element={<CSPortfolio />} />
                <Route path="/photography-portfolio" element={<PhotographyPortfolio />} />
                <Route path="/dndowolf-wiki" element={<DnDoWolfWiki />} />
                <Route path="/music-database" element={<MusicDatabase />} />
            </Routes>
        </Router>
        */
    )
}

export default App
