
import { Container } from '@mui/material';
import Footer from '../../components/molecules/Footer';

import ConstructionNotice from '../../components/molecules/ConstructionNotice';
import DocumentTitle from '../../utils/DocumentTitle';
import NavbarCS from "../../components/organisms/navbar/NavbarCS";

function Extras() {

    DocumentTitle("Extras | CS Portfolio");
	
	return (
		<Container id="cs-portfolio-extras">
            <NavbarCS />
			<ConstructionNotice title={"CS Portfolio: Extras"} />
            <Footer bgColor="" tColor="csLight.palette.secondary.contrastText" />
		</Container>
	);

}

export default Extras;