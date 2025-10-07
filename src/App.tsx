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
import StyledDoubleArrowIcon from './custom_components/double_arrow_icon';


function App() {
  const [count, setCount] = useState(0)
  const homeTheme = homepageTheme;

  return (
    <>
    <ThemeProvider theme={homeTheme}>
    <CssBaseline />
    <Container id="homepage" maxWidth={false} disableGutters>
        <Card sx={{ p: 5, mb: 10 }}>
            <CardContent color="secondary" sx={{ }}>
                <Typography color="primary" sx={{ fontSize: 52 }}>
                    Zach Magloughlin
                </Typography>
            </CardContent>
        </Card>
        <Box sx={{ flexGrow: 1 }}>

        </Box>
        <Grid container id="home_buttons" spacing={4} sx={{ placeItems: "center", placeContent: "center" }}>
            <Grid size={{ mobile: 12, tablet: 6, laptop: 3, desktop: 3 }}>
                <HomepageButton variant="contained" color="secondary" disableElevation style={{ flexGrow: 1 }}>
                    <Typography>Enter CS Portfolio </Typography>
                    <StyledDoubleArrowIcon className="expand_on_hover"/>
                </HomepageButton>
            </Grid>
            <Grid size={{ mobile: 12, tablet: 6, laptop: 3, desktop: 3 }}>
                <HomepageButton variant="contained" color="secondary" disableElevation style={{ flexGrow: 1 }}>
                    <Typography>Enter Photography Portfolio</Typography>
                    <StyledDoubleArrowIcon className="expand_on_hover"/>
                </HomepageButton>
            </Grid>
            <Grid size={{ mobile: 12, tablet: 6, laptop: 3, desktop: 3 }}>
                <HomepageButton variant="contained" color="secondary" disableElevation style={{ flexGrow: 1 }}>
                    <Typography>Enter D&DoWolf Wiki </Typography>
                    <StyledDoubleArrowIcon className="expand_on_hover"/>
                </HomepageButton>
            </Grid>
            <Grid size={{ mobile: 12, tablet: 6, laptop: 3, desktop: 3 }}>
                <HomepageButton variant="contained" color="secondary" disableElevation style={{ flexGrow: 1 }}>
                    <Typography>Enter Music Database </Typography>
                    <StyledDoubleArrowIcon className="expand_on_hover"/>
                </HomepageButton>
            </Grid>
        </Grid> {/* end of homepage buttons */}
    </Container>
    </ThemeProvider>
    {/*<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    */}
    </>
  )
}

export default App
