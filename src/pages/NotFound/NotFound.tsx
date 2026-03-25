import ConstructionNotice from '../../components/ConstructionNotice';
import Footer from '../../components/Footer';
import DocumentTitle from '../../utils/DocumentTitle';

function NotFound() {

    DocumentTitle("Page Not Found");

	return (
		<div id="page-not-found-parent">
			<ConstructionNotice title={"Page Not Found"} />
			<Footer />
		</div>
	);

}

export default NotFound;