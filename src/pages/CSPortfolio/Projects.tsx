
import { Box, Container, FormControl, InputLabel, MenuItem, Select, ThemeProvider, Typography } from '@mui/material';
import Footer from '../../components/Footer';

import ConstructionNotice from '../../components/ConstructionNotice';
import DocumentTitle from '../../utils/DocumentTitle';
import NavbarCS from "../../components/navbar/NavbarCS";
import csLight from "../../styles/csLight";
import ProjectDropdownSelect from '../../components/ProjectDropdownSelect';

function Projects() {
	
    DocumentTitle("Projects | CS Portfolio");

	return (
		<Container maxWidth={false} id="cs-portfolio-projects" sx={{ mt: 12 }} >
        <NavbarCS />
        <ThemeProvider theme={csLight}>

            <Typography className="title" sx={{ py: 0, color: csLight.palette.primary.contrastText }}>
                Projects
            </Typography>

            <Box id="projects-page" sx={{ display: "flex", flexDirection: "column" }}>
                {ProjectDropdownSelect()}
            </Box>

            <Footer bgColor="" tColor="csLight.palette.secondary.contrastText" />
        </ThemeProvider>
		</Container>
	)
};

export default Projects;