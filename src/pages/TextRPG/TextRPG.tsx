import ConstructionNotice from '../../components/molecules/ConstructionNotice';
import Footer from '../../components/molecules/Footer';
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