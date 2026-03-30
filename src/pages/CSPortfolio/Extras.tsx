
import { Container } from '@mui/material';
import Footer from '../../components/Footer';

import ConstructionNotice from '../../components/ConstructionNotice';
import DocumentTitle from '../../utils/DocumentTitle';
import NavbarCS from "../../components/navbar/NavbarCS";

function Extras() {

    DocumentTitle("Extras | CS Portfolio");
	
	return (
		<Container id="cs-portfolio-extras">
            <NavbarCS />
			<ConstructionNotice title={"CS Portfolio: Extras"} />
            <Footer bgColor="" tColor="white" />
		</Container>
	);

}

export default Extras;