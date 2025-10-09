import { useState } from 'react'

import './App.css'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import homepageTheme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';
import Container from '@mui/system/Container';
import Grid from '@mui/system/Grid';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import HomepageButton from './custom_components/homepage_button';
import { CssBaseline } from '@mui/material';



function App() {
    return (
        <div>
            
        <CssBaseline />
        <Emotion10ThemeProvider theme={homepageTheme}>
        <ThemeProvider theme={homepageTheme}>

        <Container id="homepage" maxWidth={false} disableGutters>
            <Card sx={{ p: 5, mb: 10 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 52 }}>
                        Zach Magloughlin
                    </Typography>
                </CardContent>
            </Card>
            <Grid container id="home_buttons" spacing={4}>
                <Grid size={{ mobile: 12, tablet: 6, laptop: 3, desktop: 3 }}>
                    <HomepageButton variant="contained" disableElevation>
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
        </Container>

        </ThemeProvider>
        </Emotion10ThemeProvider>
        </div>
    )
}

export default App
