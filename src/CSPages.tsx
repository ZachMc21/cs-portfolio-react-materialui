import { Container } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';

import './App.css'
import homepageTheme from './themes/theme_home';

import { BrowserRouter as Router, Route, Routes, useResolvedPath } from 'react-router-dom';
import Enter from './Enter';
import CSPortfolio from './CSPortfolio';
import PhotographyPortfolio from './PhotographyPortfolio';
import TextRPG from './TextRPG';
import MusicDatabase from './MusicDatabase';
import CSPortfolioDev from './CSPortfolioDev';


function CSPages() {
	const path: string = useResolvedPath("").pathname;

	return (
		<Container>
			<ThemeProvider theme={homepageTheme}>
				
			<Routes>
				<Route path={`${path}/skills`} element={<CSSkills />} />
				<Route path={`${path}/projects`} element={<CSProjects />} />
				<Route path={`${path}/extras`} element={<CSExtras />} />
				<Route path={path} element={<CSPortfolioDev />} />
			</Routes>

			</ThemeProvider>
		</Container>
	)
}

export default CSPages
