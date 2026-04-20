import { Container, CssBaseline } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import BackButton from '../atoms/BackButton.tsx';

import '../../styles/construction-notice.scss';


interface ConstructionProps {
	title: string;
}

const ConstructionNotice = ({ title }: ConstructionProps) => {

	return (
		<Container>
			<CssBaseline />

			<div className="construction-notice">
				<ConstructionIcon sx={{ fontSize: "6rem", marginTop: "4rem", marginBottom: "1rem" }} />
				<h1 style = {{ marginBottom: 0 }}>{title}</h1>
				<p style={{ marginBottom: "2rem" }}>This page is under construction. <br /> Check back later!</p>
				<BackButton />
			</div>
		</Container>
	);
}

export default ConstructionNotice;