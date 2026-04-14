import { ThemeProvider } from '@emotion/react';
import ConstructionNotice from '../../components/molecules/ConstructionNotice';
import Footer from '../../components/molecules/Footer';
import DocumentTitle from '../../utils/DocumentTitle';
import HomeLight from "../../styles/homeLight";

function NotFound() {

    DocumentTitle("Page Not Found");

	return (
		<div id="page-not-found-parent">
            <ThemeProvider theme={HomeLight}>
                <ConstructionNotice title={"Page Not Found"} />
                <Footer bgColor="" tColor="white" />
            </ThemeProvider>
		</div>
	);

}

export default NotFound;