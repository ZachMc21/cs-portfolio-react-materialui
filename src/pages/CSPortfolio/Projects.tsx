
import { Box, Container, FormControl, InputLabel, MenuItem, Select, ThemeProvider, Typography } from '@mui/material';
import Footer from '../../components/molecules/Footer';

import ConstructionNotice from '../../components/molecules/ConstructionNotice';
import DocumentTitle from '../../utils/DocumentTitle';
import NavbarCS from "../../components/organisms/navbar/NavbarCS";
import csLight from "../../styles/csLight";
import ProjectDropdownSelect from '../../components/organisms/ProjectDropdownSelect';

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