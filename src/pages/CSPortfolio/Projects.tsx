
import { Container } from '@mui/material';
import Footer from '../../components/Footer';

import ConstructionNotice from '../../components/ConstructionNotice';
import DocumentTitle from '../../utils/DocumentTitle';
import NavbarCS from "../../components/navbar/NavbarCS";

function Projects() {
	
    DocumentTitle("Projects | CS Portfolio");

	return (
		<Container id="cs-portfolio-projects">
            <NavbarCS />
			<ConstructionNotice title={"CS Portfolio: Projects"} />
			<Footer />
		</Container>
	);

}

export default Projects;