
import { Container } from '@mui/material';
import Footer from '../../components/Footer';

import ConstructionNotice from '../../components/ConstructionNotice';
import DocumentTitle from '../../utils/DocumentTitle';

function Skills() {

    DocumentTitle("Skills | CS Portfolio");
	
	return (
		<Container id="cs-portfolio-skills">
			<ConstructionNotice title={"CS Portfolio: Skills"} />
			<Footer />
		</Container>
	);

}

export default Skills;