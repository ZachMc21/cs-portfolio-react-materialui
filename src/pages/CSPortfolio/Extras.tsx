
import { Container } from '@mui/material';
import Footer from '../../components/Footer';

import ConstructionNotice from '../../components/ConstructionNotice';
import DocumentTitle from '../../utils/DocumentTitle';

function Extras() {

    DocumentTitle("Extras | CS Portfolio");
	
	return (
		<Container id="cs-portfolio-extras">
			<ConstructionNotice title={"CS Portfolio: Extras"} />
			<Footer />
		</Container>
	);

}

export default Extras;