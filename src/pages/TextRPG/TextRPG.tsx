import ConstructionNotice from '../../components/ConstructionNotice';
import Footer from '../../components/Footer';
import DocumentTitle from '../../utils/DocumentTitle';

function TextRPG() {

    DocumentTitle("Text RPG");

	return (
		<div id="text-rpg-parent">
			<ConstructionNotice title={"Text RPG"} />
            <Footer bgColor="" tColor="black"/>
		</div>
	);

}

export default TextRPG;