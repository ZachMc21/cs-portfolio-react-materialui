import { useNavigate } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ConstructionIcon from '@mui/icons-material/Construction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BackButton from './BackButton.tsx';
import csTheme from '../themes/theme_cs';
import './construction-notice.css';



interface ConstructionProps {
	title: string;
}

const ConstructionNotice = ({ title }: ConstructionProps) => {
	const navigate = useNavigate();

	return (
		<Container>
			<ThemeProvider theme={csTheme}>
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