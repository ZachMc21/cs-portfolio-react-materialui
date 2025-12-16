import { Container } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css'
import homeTheme from "./styles/homeTheme";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Enter from './Enter';
import CSPortfolio from './CSPortfolio';
import PhotographyPortfolio from './PhotographyPortfolio';
import TextRPG from './TextRPG';
import MusicDatabase from './MusicDatabase';


function App() {

	return (
        <ThemeProvider theme={homeTheme}>
		    <Container>
				<Routes>
					<Route path='/' element={<Enter />} />
					<Route path="/cs-portfolio" element={<CSPortfolio />} />
					<Route path="/photography-portfolio" element={<PhotographyPortfolio />} />
					<Route path="/music-database" element={<MusicDatabase />} />
					<Route path="/text-rpg" element={<TextRPG />} />
				</Routes>

		    </Container>
        </ThemeProvider>
	)
}

export default App
