import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Container, CssBaseline, Link } from '@mui/material';
import Grid from '@mui/system/Grid';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css'
import homepageTheme from './themes/theme_home';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import HomepageButton from './custom_components/homepage_button';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Enter from './Enter';
import CSPortfolio from './CSPortfolio';
import globalTheme from './themes/theme_global';
{ /*
import DnDoWolfWiki from './DnDoWolfWiki';
import MusicDatabase from './MusicDatabase';
*/ }


function App() {

    return (
        <Container>
        <ThemeProvider theme={homepageTheme}>
            <CssBaseline />
            
            <Box id="homepage-content" sx={{ backgroundColor: homepageTheme.palette.background.default, mb: "5rem" }} display="flex" flexDirection="column" justifyContent="center" > {/* Pale light blue */}
                <Card sx={{ p: 5, mb: 10, backgroundColor: homepageTheme.palette.primary.light }}> {/* Less pale light blue */}
                    <CardContent>
                        <Typography id="page-title" sx={{ fontSize: 52, color: homepageTheme.palette.primary.contrastText }}> {/* Very dark blue */}
                            Zach Magloughlin
                        </Typography>
                    </CardContent>
                </Card>
                <div id="home-buttons-container">
                    <HomepageButton href="/cs-portfolio" className="home-column" variant="contained" disableElevation>
                        <Typography sx={{ textWrap: 'balance', mb: "0.5rem" }}>Enter CS Portfolio</Typography>
                        <DoubleArrowIcon />
                    </HomepageButton>
                    <HomepageButton href="/photography-portfolio" className="home-column" variant="contained" disableElevation>
                        <Typography sx={{ textWrap: 'balance', mb: "0.5rem" }}>Enter Photography Portfolio</Typography>
                        <DoubleArrowIcon />
                    </HomepageButton>

                    <HomepageButton href="/dndowolf-wiki" className="home-column" variant="contained" disableElevation>
                        <Typography sx={{ textWrap: 'balance', mb: "0.5rem" }}>Enter D&DoWolf Wiki </Typography>
                        <DoubleArrowIcon />
                    </HomepageButton>
                    <HomepageButton href="/music-database" className="home-column" variant="contained" disableElevation>
                        <Typography sx={{ textWrap: 'balance', mb: "0.5rem" }}>Enter Music Database </Typography>
                        <DoubleArrowIcon />
                    </HomepageButton>
                </div>
            </Box>
            <footer>
                <Box id="footer-text" sx={{ mb: 0, fontSize: "0.75rem" }}>
                    <p>© 2025 Zach Magloughlin. All rights reserved.</p>
                </Box>
            </footer>

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
