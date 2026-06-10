
import ConstructionNotice from '../../components/molecules/ConstructionNotice';
import Footer from '../../components/molecules/Footer';
import DocumentTitle from '../../utils/DocumentTitle';

function CompletePhotoGallery() {

    DocumentTitle("All Photography");

	return (
		<div id="photo-portfolio-gallery">
			<ConstructionNotice title={"Photo Gallery"} />
            <Footer bgColor="" tColor="white" />
		</div>
	);

}

export default CompletePhotoGallery;