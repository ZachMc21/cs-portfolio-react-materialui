
import ConstructionNotice from './custom_components/ConstructionNotice';
import Footer from './custom_components/Footer';
import './EmptyPageStyle.css';

function MusicDatabase() {

	return (
		<div id="music-database">
			<ConstructionNotice title={"Music Database"} />
			<Footer />
		</div>
	);

}

export default MusicDatabase;