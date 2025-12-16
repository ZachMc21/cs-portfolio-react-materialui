import { CssBaseline, Box, Card, CardContent, Typography, ThemeProvider, Container, FormGroup, FormControlLabel, Switch, createTheme, Button } from "@mui/material";
import Footer from "./components/Footer";
import homeThemeLight from "./styles/homeLight";
import homeThemeDark from "./styles/homeDark";
import HomepageButton from "./components/HomepageButton";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function Enter() {

	return (
		<Container id="enter-site"
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center",
                maxWidth: "100vw", maxHeight: "100vh",
                mt: 10,
             }}>
			<ThemeProvider theme={homeThemeLight}>
				<CssBaseline />

				<Box id="homepage-content"
					sx={{
						mb: 1, minHeight: "95vh",
						display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", 
						backgroundColor: homeThemeLight.background.default
					    }}>
					<Box
                        sx={{ p: 5, py: 8, mb: 8,
							backgroundColor: homeThemeLight.primary.light
                            }}>
                        <Typography variant="title" id="page-title"
                            sx={{ fontSize: 52, color: homeThemeLight.primary.contrastText }}>
                            Zach Magloughlin
                        </Typography>
					</Box>
					<Box id="home-buttons-container" sx={{ mx: 0 }}>
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
							<Typography sx={{ textWrap: 'balance', mb: "0.5rem" }}>Enter Text RPG</Typography>
							<DoubleArrowIcon />
						</HomepageButton>
					</Box>

                    <Box sx={{ my: 3 }}>
                        <Typography sx={{ mt: 5, fontStyle: 'italic' }}>You will experience this site in light mode.</Typography>
                        <Button>
                            <ThemeProvider theme={homeThemeDark}>
                                <Typography sx={{ textTransform: "uppercase", fontSize: 16,
                                    backgroundColor: homeThemeDark.background.default, color: homeThemeDark.primary.main,
                                    py: 1, px: 3 }}>Switch to dark mode</Typography>
                            </ThemeProvider>
                        </Button>
                    </Box>
				</Box>
				<Footer />

			</ThemeProvider>
		</Container>
	)
}

export default Enter;