import { Container, CssBaseline } from '@mui/material';
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

			<div className="construction-notice" id="container">
				<ConstructionIcon sx={{ fontSize: "6rem", marginTop: "2rem", marginBottom: "1rem" }} />
				<h1>{title}</h1>
				<p style={{ marginBottom: "2rem" }}>This page is under construction. <br /> Check back later!</p>
				<BackButton />
			</div>

			</ThemeProvider>
		</Container>
	);
}

export default ConstructionNotice;