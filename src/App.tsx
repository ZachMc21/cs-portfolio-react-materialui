import { Container, CssBaseline } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';

import './App.css'
import homepageTheme from './themes/theme-home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Enter from './Enter';
import CSPortfolio from './CSPortfolio';
import PhotographyPortfolio from './PhotographyPortfolio';
import TextRPG from './TextRPG';
import MusicDatabase from './MusicDatabase';
import CSPortfolioDev from './CSPortfolioDev';


function App() {
	return (
		<Container>
			<ThemeProvider theme={homepageTheme}>
                <CssBaseline />
				<Routes>
					<Route path='/' element={<Enter />} />
                    {/* <Route path='/' element={<CSPortfolioDev />} /> */}
					<Route path="/cs-portfolio" element={<CSPortfolio />} />
					<Route path="/photography-portfolio" element={<PhotographyPortfolio />} />
					<Route path="/music-database" element={<MusicDatabase />} />
					<Route path="/text-rpg" element={<TextRPG />} />
				</Routes>

			</ThemeProvider>
		</Container>
	)
}

export default App
