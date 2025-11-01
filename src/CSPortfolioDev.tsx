
import { Container, ThemeProvider } from '@mui/material';
import Footer from './custom_components/Footer';
import homepageTheme from "./themes/theme-cs-portfolio";
import ThemeProviderWrapper from './ThemeProviderWrapper';

function CSPortfolioDev() {

	return (
		<Container id="cs-portfolio">
		<ThemeProviderWrapper>
			<Footer />
		</ThemeProviderWrapper>
		</Container>
	);

}

export default CSPortfolioDev;