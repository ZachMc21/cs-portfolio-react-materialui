import { ThemeProvider } from '@mui/material/styles';

import './App.css'
import homeLight from "./styles/homepage/homeLight";

import { HashRouter, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Homepage from './pages/Homepage/Homepage';
import CSHome from './pages/CSPortfolio/CSHome';
import Skills from './pages/CSPortfolio/Skills';
import Projects from './pages/CSPortfolio/Projects';
import Extras from './pages/CSPortfolio/Extras';
import MusicDatabase from './pages/MusicDatabase/MusicDatabase';
import TextRPG from './pages/TextRPG/TextRPG';
import PhotographyPortfolio from './pages/PhotographyPortfolio/PhotographyPortfolio';
import NotFound from './pages/NotFound/NotFound';

function App() {

  return (
    <ThemeProvider theme={homeLight}>
      <Box className="App">
        <HashRouter>
          <Routes>
            <Route index path="" element={<Homepage />} />

            <Route path="/cs-portfolio" element={<CSHome />} />
            <Route path="/cs-portfolio/skills" element={<Skills />} />
            <Route path="/cs-portfolio/projects" element={<Projects />} />
            <Route path="/cs-portfolio/extras" element={<Extras />} />

            <Route path="/photography-portfolio" element={<PhotographyPortfolio />} />

            <Route path="/music-database" element={<MusicDatabase />} />

            <Route path="/text-rpg" element={<TextRPG />} />

            <Route path="/" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App
