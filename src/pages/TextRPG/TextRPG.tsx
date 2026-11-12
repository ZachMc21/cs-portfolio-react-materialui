import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import ConstructionNotice from '../../components/molecules/ConstructionNotice';
import Footer from '../../components/molecules/Footer';
import DocumentTitle from '../../utils/DocumentTitle';

function TextRPG() {

    DocumentTitle("Text RPG");

	const textRPGTheme = createTheme({
		palette: {
			background: {
				default: "#23242E",
			},
			primary: {
				main: "#000000",
				contrastText: "#BDC7C7",
			},
			secondary: {
				main: "#91C7B1",
				contrastText: "#605550",
			},
		},
	});
	
	return (
		<>
		<CssBaseline />
		<Box id="text-rpg-parent" sx={{ backgroundImage: "none", backgroundColor: textRPGTheme.palette.background.default }}>
			<ThemeProvider theme={textRPGTheme}>
				<ConstructionNotice title={"Text RPG"} />
				<Footer bgColor="" textColor={textRPGTheme.palette.primary.contrastText} />
			</ThemeProvider>
		</Box>
		</>
	);

}

export default TextRPG;