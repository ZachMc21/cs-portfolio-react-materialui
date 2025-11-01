
import ConstructionNotice from './custom_components/ConstructionNotice';
import Footer from './custom_components/Footer';
import './EmptyPageStyle.css';
import csPortfolioTheme from './themes/theme-cs-portfolio';
import { ThemeProvider } from '@mui/material/styles';

function CSPortfolio() {

	return (
		<ThemeProvider theme={csPortfolioTheme}>
			<div className="empty-page" id="cs-portfolio-parent">
				<ConstructionNotice title={"Computer Science Portfolio"} />
				<Footer />
			</div>
		</ThemeProvider>
	);

}

export default CSPortfolio;