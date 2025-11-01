
import ConstructionNotice from './custom_components/ConstructionNotice';
import Footer from './custom_components/Footer';
import './EmptyPageStyle.css';
import { ThemeProvider } from '@mui/material/styles';
import photoPortfolioTheme from './themes/theme-photo-portfolio';

function PhotographyPortfolio() {

	return (
		
		<ThemeProvider theme={photoPortfolioTheme}>
			<div id="photo-portfolio-parent">
				<ConstructionNotice title={"Photography Portfolio"} />
				<Footer />
			</div>
		</ThemeProvider>
	);

}

export default PhotographyPortfolio;