import { Container } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';

import './App.css'
import homepageTheme from './themes/theme_home';

import { BrowserRouter as Router, Route, Routes, useResolvedPath } from 'react-router-dom';
import CSPortfolio from './CSPortfolio';

function CSPages() {
	const path: string = useResolvedPath("").pathname;

	return (
		<Container>
			<ThemeProvider theme={homepageTheme}>
				
			<Routes>
				{/* <Route path={`${path}/skills`} element={<CSSkills />} />
				<Route path={`${path}/projects`} element={<CSProjects />} />
				<Route path={`${path}/extras`} element={<CSExtras />} /> */}
				<Route path={path} element={<CSPortfolio />} />
			</Routes>

			</ThemeProvider>
		</Container>
	)
}

export default CSPages
