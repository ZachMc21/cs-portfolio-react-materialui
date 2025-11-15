import { CssBaseline, Box, Card, CardContent, Typography, ThemeProvider, Container } from "@mui/material";
import Footer from "./custom_components/Footer";
import homepageTheme from './themes/theme_home';
import HomepageButton from "./custom_components/HomepageButton";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';



function Enter() {

	return (
		<Container id="enter-site"
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center",
                maxWidth: "100vw", maxHeight: "100vh",
                m: 0, px: "2rem", pt: "2rem",
             }}>
			<ThemeProvider theme={homepageTheme}>
				<CssBaseline />

				<Box id="homepage-content"
					sx={{
						mb: "2rem", minHeight: "95vh",
						display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", 
						backgroundColor: homepageTheme.palette.background.default
					}}>
					<Card
						sx={{
							p: 5, mb: 10,
							backgroundColor: homepageTheme.palette.primary.light
							}}>
						<CardContent>
							<Typography id="page-title"
								sx={{ fontSize: 52, color: homepageTheme.palette.primary.contrastText }}> {/* Very dark blue */}
								Zach Magloughlin
							</Typography>
						</CardContent>
					</Card>
					<Container id="home-buttons-container" sx={{ mb: "1rem" }}>
						<HomepageButton href="/cs-portfolio" className="home-column" variant="contained" disableElevation>
							<Typography sx={{ textWrap: 'balance', mb: "0.5rem" }}>Enter CS Portfolio</Typography>
							<DoubleArrowIcon />
						</HomepageButton>
						<HomepageButton href="/photography-portfolio" className="home-column" variant="contained" disableElevation>
							<Typography sx={{ textWrap: 'balance', mb: "0.5rem" }}>Enter Photography Portfolio</Typography>
							<DoubleArrowIcon />
						</HomepageButton>

						<HomepageButton href="/music-database" className="home-column" variant="contained" disableElevation>
							<Typography sx={{ textWrap: 'balance', mb: "0.5rem" }}>Enter Music Database </Typography>
							<DoubleArrowIcon />
						</HomepageButton>
						<HomepageButton href="/text-rpg" className="home-column" variant="contained" disableElevation>
							<Typography sx={{ textWrap: 'balance', mb: "0.5rem" }}>Enter Text RPG Game </Typography>
							<DoubleArrowIcon />
						</HomepageButton>
					</Container>
				</Box>
				<Footer />

			</ThemeProvider>
		</Container>
	)
}

export default Enter;