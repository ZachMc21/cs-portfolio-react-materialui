
import ConstructionNotice from '../../components/molecules/ConstructionNotice';
import Footer from '../../components/molecules/Footer';
import DocumentTitle from '../../utils/DocumentTitle';

function PublishedWorks() {

    DocumentTitle("Published Photography");

	return (
		<div id="photo-portfolio-published">
			<ConstructionNotice title={"Published Photography"} />
            <Footer bgColor="" tColor="white" />
		</div>
	);

}

export default PublishedWorks;