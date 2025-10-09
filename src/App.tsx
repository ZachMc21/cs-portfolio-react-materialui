import { useState } from 'react'

import './App.css'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/system/Box';
import homepageTheme from './theme';
import { CssBaseline, Icon, IconButton, ThemeProvider } from '@mui/material';
import Container from '@mui/system/Container';
import Grid from '@mui/system/Grid';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import HomepageButton from './custom_components/homepage_button';

function App() {
    return (
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
    )
}

export default App
