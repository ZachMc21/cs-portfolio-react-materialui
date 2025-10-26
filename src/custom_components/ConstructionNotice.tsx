import { useNavigate } from 'react-router-dom';
import ConstructionIcon from '@mui/icons-material/Construction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './construction-notice.css';
import BackButton from './BackButton';
import Typography from '@mui/material/Typography';
import csTheme from '../themes/theme_cs';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';



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
					<BackButton className="construction-notice" sx={{ fontSize: "2em", color: csTheme.palette.primary.dark, backgroundColor: csTheme.palette.primary.light }}>
						<Typography sx={{ fontStyle: "italic" }} onClick={() => navigate(-1)}> Go back </Typography>
						<ArrowBackIcon />
					</BackButton>
				</div>

        </ThemeProvider>
		</Container>
	);
}

export default ConstructionNotice;