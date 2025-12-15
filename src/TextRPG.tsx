import ConstructionNotice from './components/ConstructionNotice';
import Footer from './components/Footer';
import './EmptyPageStyle.css';

function TextRPG() {

	return (
		<div id="text-rpg-parent">
			<ConstructionNotice title={"Text RPG"} />
			<Footer />
		</div>
	);

}

export default TextRPG;