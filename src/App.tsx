import { Container } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';

import './App.css'
import homepageTheme from './themes/theme_home';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Enter from './Enter';
import CSPortfolio from './CSPortfolio';
import PhotographyPortfolio from './PhotographyPortfolio';
import DnDoWolfWiki from './DnDoWolfWiki';
import MusicDatabase from './MusicDatabase';


function App() {

	return (
		<Container>
			<ThemeProvider theme={homepageTheme}>
				<Routes>
					<Route path='/' element={<Enter />} />
					<Route path="/cs-portfolio" element={<CSPortfolio />} />
					<Route path="/photography-portfolio" element={<PhotographyPortfolio />} />
					<Route path="/dndowolf-wiki" element={<DnDoWolfWiki />} />
					<Route path="/music-database" element={<MusicDatabase />} />
				</Routes>

			</ThemeProvider>
		</Container>
	)
}

export default App
