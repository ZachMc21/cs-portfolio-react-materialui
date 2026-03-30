
import ConstructionNotice from '../../components/ConstructionNotice';
import Footer from '../../components/Footer';
import DocumentTitle from '../../utils/DocumentTitle';

function PhotographyPortfolio() {

    DocumentTitle("Photography Portfolio");

	return (
		<div id="photo-portfolio-parent">
			<ConstructionNotice title={"Photography Portfolio"} />
            <Footer bgColor="" tColor="white" />
		</div>
	);

}

export default PhotographyPortfolio;