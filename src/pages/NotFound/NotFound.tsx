import { ThemeProvider } from '@emotion/react';
import ConstructionNotice from '../../components/ConstructionNotice';
import Footer from '../../components/Footer';
import DocumentTitle from '../../utils/DocumentTitle';
import csLight from '../../styles/csLight';

function NotFound() {

    DocumentTitle("Page Not Found");

	return (
		<div id="page-not-found-parent">
            <ThemeProvider theme={csLight}>
                <ConstructionNotice title={"Page Not Found"} />
                <Footer />
            </ThemeProvider>
		</div>
	);

}

export default NotFound;