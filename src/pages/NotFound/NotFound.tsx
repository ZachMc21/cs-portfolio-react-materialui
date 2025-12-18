import ConstructionNotice from '../../components/ConstructionNotice';
import Footer from '../../components/Footer';
import '../../EmptyPageStyle.css';

function NotFound() {

	return (
		<div id="page-not-found-parent">
			<ConstructionNotice title={"Page Not Found"} />
			<Footer />
		</div>
	);

}

export default NotFound;