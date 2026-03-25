
import { Container } from '@mui/material';
import Footer from '../../components/Footer';

import ConstructionNotice from '../../components/ConstructionNotice';
import DocumentTitle from '../../utils/DocumentTitle';

function Projects() {
	
    DocumentTitle("Projects | CS Portfolio");

	return (
		<Container id="cs-portfolio-projects">
			<ConstructionNotice title={"CS Portfolio: Projects"} />
			<Footer />
		</Container>
	);

}

export default Projects;