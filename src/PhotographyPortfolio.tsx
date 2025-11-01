
import ConstructionNotice from './custom_components/ConstructionNotice';
import Footer from './custom_components/Footer';
import './EmptyPageStyle.css';

function PhotographyPortfolio() {

	return (
		<div id="photo-portfolio-parent">
			<ConstructionNotice title={"Photography Portfolio"} />
			<Footer />
		</div>
	);

}

export default PhotographyPortfolio;