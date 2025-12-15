
import ConstructionNotice from './components/ConstructionNotice';
import Footer from './components/Footer';
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