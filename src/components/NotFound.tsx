import ConstructionNotice from './ConstructionNotice';
import Footer from './Footer';

function NotFound() {

	return (
		<div id="page-not-found-parent">
			<ConstructionNotice title={"Page Not Found"} />
			<Footer />
		</div>
	);

}

export default NotFound;