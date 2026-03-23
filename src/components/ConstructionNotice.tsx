import { Container, CssBaseline, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import ConstructionIcon from '@mui/icons-material/Construction';
import BackButton from './BackButton.tsx';
import homeThemeLight from "../styles/homeLight";

import './construction-notice.css';

interface ConstructionProps {
	title: string;
}

const ConstructionNotice = ({ title }: ConstructionProps) => {

	return (
		<Container>
			<ThemeProvider theme={homeThemeLight}>
			<CssBaseline />

			<Container className="construction-notice" id="container" sx = {{ mb: "3rem" }}>
				<ConstructionIcon sx={{ fontSize: "6rem", mt: "2rem", mb: "1rem" }} />
				<h1>{title}</h1>
				<Typography sx={{ mb: "3rem", fontSize: "1.5rem" }}>This page is under construction. <br /> Check back later!</Typography>
				<BackButton />
			</Container>

			</ThemeProvider>
		</Container>
	);
}

export default ConstructionNotice;