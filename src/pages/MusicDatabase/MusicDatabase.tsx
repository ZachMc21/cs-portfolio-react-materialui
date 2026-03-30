
import ConstructionNotice from '../../components/ConstructionNotice';
import Footer from '../../components/Footer';
import DocumentTitle from "../../utils/DocumentTitle";


function MusicDatabase() {

    DocumentTitle("Music Database");

	return (
		<div id="music-database">
			<ConstructionNotice title={"Music Database"} />
			<Footer bgColor="" tColor="black" />
		</div>
	);

}

export default MusicDatabase;