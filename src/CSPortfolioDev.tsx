
import { Container, ThemeProvider } from '@mui/material';
import Footer from './custom_components/Footer';
import homepageTheme from "./themes/theme_cs";

function CSPortfolioDev() {

	return (
		<Container id="cs-portfolio">
			<ThemeProvider theme={homepageTheme}>
			<Footer />
			</ThemeProvider>
		</Container>
	);

}

export default CSPortfolioDev;