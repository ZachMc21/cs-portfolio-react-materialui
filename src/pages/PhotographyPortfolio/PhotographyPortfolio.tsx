
import ConstructionNotice from '../../components/molecules/ConstructionNotice';
import Footer from '../../components/molecules/Footer';
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