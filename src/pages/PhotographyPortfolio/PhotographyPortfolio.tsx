
import ConstructionNotice from '../../components/ConstructionNotice';
import Footer from '../../components/Footer';
import DocumentTitle from '../../utils/documentTitle';

function PhotographyPortfolio() {
    
    DocumentTitle("Zach's Photography Portfolio")

	return (
		<div id="photo-portfolio-parent">
			<ConstructionNotice title={"Photography Portfolio"} />
			<Footer />
		</div>
	);

}

export default PhotographyPortfolio;