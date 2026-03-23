
import ConstructionNotice from '../../components/ConstructionNotice';
import Footer from '../../components/Footer';
import DocumentTitle from '../../utils/documentTitle';

function MusicDatabase() {
    
    DocumentTitle("Zach's Music Collection")

	return (
		<div id="music-database">
			<ConstructionNotice title={"Music Database"} />
			<Footer />
		</div>
	);

}

export default MusicDatabase;