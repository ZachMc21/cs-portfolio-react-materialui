import { useState } from 'react'

import './App.css'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/system/Box';
import homepageTheme from './theme';
import { IconButton, ThemeProvider } from '@mui/material';
import Container from '@mui/system/Container';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


function App() {
  const [count, setCount] = useState(0)
  const homeTheme = homepageTheme;

  return (
    <>
    <ThemeProvider theme={homeTheme}>
    <Container id="homepage" maxWidth={false} disableGutters>
        <Card sx={{ width: 1, height: 1 }}>
            <CardContent color="secondary" sx={{ }}>
                <Typography gutterBottom color="primary" sx={{ fontSize: 52 }}>
                    Zach Magloughlin
                </Typography>
            </CardContent>
        </Card>
        <Box component="section" id="home_buttons">
            <Button variant="contained" color="secondary" size="large"
                sx={{ 
                    fontSize: "medium",
                    '&:hover': { fontSize: "large", borderColor: "primary.dark", borderWidth: '5%' },
                }}>
                <Typography>Enter CS Portfolio</Typography>
                <IconButton color="primary">
                    <DoubleArrowIcon />
                </IconButton>
            </Button>
            <Button variant="contained" color="secondary" size="large">Enter Photography Portfolio</Button>
            <Button variant="contained" color="secondary" size="large">Enter D&DoWolf Wiki</Button>
        </Box>
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
