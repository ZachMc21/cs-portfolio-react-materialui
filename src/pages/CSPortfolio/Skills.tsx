
import { Container } from '@mui/material';
import Footer from '../../components/Footer';

import ConstructionNotice from '../../components/ConstructionNotice';
import DocumentTitle from '../../utils/DocumentTitle';
import NavbarCS from "../../components/navbar/NavbarCS";

function Skills() {

    DocumentTitle("Skills | CS Portfolio");
	
	return (
		<Container id="cs-portfolio-skills">
            <NavbarCS />
			<ConstructionNotice title={"CS Portfolio: Skills"} />
			<Footer />
		</Container>
	);

}

export default Skills;