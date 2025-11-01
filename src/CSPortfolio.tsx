
import ConstructionNotice from './custom_components/ConstructionNotice';
import Footer from './custom_components/Footer';
import './EmptyPageStyle.css';

function CSPortfolio() {

	return (
		<div className="empty-page" id="cs-portfolio-parent">
			<ConstructionNotice title={"Computer Science Portfolio"} />
			<Footer />
		</div>
	);

}

export default CSPortfolio;