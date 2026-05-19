
import { Box, Container, ThemeProvider, Typography } from '@mui/material';
import Footer from '../../components/molecules/Footer';

import ConstructionNotice from '../../components/molecules/ConstructionNotice';
import DocumentTitle from '../../utils/DocumentTitle';
import NavbarCS from "../../components/organisms/navbar/NavbarCS";
import csLight from "../../styles/csLight";
import ProjectDropdownSelect from '../../components/molecules/ProjectDropdownSelect';
import ProjectsWebdev from '../../components/organisms/cs-projects/ProjectsWebdev';
import ProjectsSwe from '../../components/organisms/cs-projects/ProjectsSwe';
import ProjectsData from '../../components/organisms/cs-projects/ProjectsData';
import ProjectsGamedev from '../../components/organisms/cs-projects/ProjectsGamedev';
import "../../styles/cs-projects.scss";

function Projects() {
	
    DocumentTitle("Projects | CS Portfolio");

	return (
		<Container maxWidth={false} id="cs-portfolio-projects" sx={{ pt: 12 }} >
        <Box id="height-wrapper">
                
            <ThemeProvider theme={csLight}>
            <NavbarCS />

            <Typography className="cs-page-title">
                Projects
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column"}}>
                {ProjectDropdownSelect()}
            </Box>

            <ProjectsWebdev />
            <ProjectsSwe />
            <ProjectsData />
            <ProjectsGamedev />
            
            </ThemeProvider>
        </Box>

        <Footer bgColor="" tColor="csLight.palette.secondary.contrastText" />
      
		</Container>
	)
};

export default Projects;