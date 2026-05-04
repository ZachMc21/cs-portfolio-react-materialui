
import { Box, Container, ThemeProvider, Typography } from '@mui/material';
import ConstructionNotice from '../../components/molecules/ConstructionNotice';

import Footer from '../../components/molecules/Footer';

import DocumentTitle from '../../utils/DocumentTitle';
import NavbarCS from "../../components/organisms/navbar/NavbarCS";

import csLight from '../../styles/csLight';
import "../../styles/cs-extras.scss";

function Extras() {

    DocumentTitle("Extras | CS Portfolio");
	
	return (
		<Box id="cs-extras-page" sx={{ mt: 12 }} >
        <NavbarCS />
        <ThemeProvider theme={csLight}>

			<Box className="extras-container">
            <Typography className="title" sx={{ py: 0, color: csLight.palette.primary.contrastText }}>
                Extra Content
            </Typography>

				<Box className="extras-category">
					<Typography className="h1 rotated">Extracurriculars</Typography>
					<Box className="extras-content">
						<Box className="extras-img-text">
							<img src="/src/assets/extras/high-grade.png" height="60" width="auto" ></img>
							<Typography className="h2">High Grade <br /> CSM Journal of the Arts</Typography>
							<Typography className="subtitle">Jury member, contributor</Typography>
						</Box>
						<Box className="extras-img-text">
							<Typography className="h2">Concert Band</Typography>
							<Typography className="subtitle">Flute</Typography>
						</Box>
						<Box className="extras-img-text">
							<Typography className="h2">Pyrotechnics club</Typography>
							<Typography className="subtitle">Member</Typography>
						</Box>
					</Box>
				</Box>

				<Box className="extras-category">
					<Typography className="h1 rotated">Hobbies</Typography>
					<Box className="extras-content">
						<Typography className="h2">Cross stitch</Typography>
						<Typography className="h2">Crochet</Typography>
						<Typography className="h2">Photography</Typography>
						<Typography className="h2">Digital painting</Typography>
						<Typography className="h2">Fiction writing</Typography>
						<Box className="extras-img-text">
							<Typography className="h2">Traditional art</Typography>
							<Typography className="subtitle">graphite, acrylic, gouache, mixed media</Typography>
						</Box>
					</Box>
				</Box>
				
				<Box className="extras-category">
					<Typography className="h1 rotated">High School</Typography>
					<Box className="extras-content">
						<Box className="extras-img-text">
							<img src="/src/assets/extras/cyber-patriot.png" height="60px" width="auto"></img>
							<Typography className="h2">AFA CyberPatriot</Typography>
							<Typography className="subtitle">Grades 8th-12th</Typography>
							<Typography className="subtitle">Seasons IX-XIII</Typography>
						</Box>
						<Box className="extras-img-text">
							<Typography className="h2">National Science Bowl</Typography>
							<Typography className="subtitle">Grades 7th-8th, 11th-12th</Typography>
						</Box>
					</Box>
				</Box>

			</Box>

			<Footer bgColor="" tColor="csLight.palette.secondary.contrastText" />
			
		</ThemeProvider>
		</Box>
	);

}

export default Extras;