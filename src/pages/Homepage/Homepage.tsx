import { CssBaseline, Box, Typography, ThemeProvider, Container, Button, alpha } from "@mui/material";
import Footer from "../../components/Footer";
import homeThemeLight from "../../styles/homeLight";
import homeThemeDark from "../../styles/homeDark";
import HomepageButton from "../../components/HomepageButton";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function Homepage() {

	return (
		<Container id="enter-site"
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center",
                maxWidth: "100vw",
                mt: 5
                }}>
			<ThemeProvider theme={homeThemeLight}>
				<CssBaseline />

				<Box id="homepage-content"
					sx={{
						display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", 
						backgroundColor: homeThemeLight.background.default
					    }}>
					<Box
                        sx={{ p: 5, py: 8, mb: 8,
                             mx: "auto", width: "90vw",
							backgroundColor: "#7DC6DD"
                            }}>
                        <Typography variant="title" id="page-title"
                            sx={{ fontSize: 52, color: homeThemeLight.primary.contrastText }}>
                            Zach Magloughlin
                        </Typography>
					</Box>
					<Box id="home-buttons-container" sx={{ mx: 0, mb: "4rem" }}>
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

                    <Box sx={{ mb: 6 }}>
                        <Typography sx={{ fontStyle: "italic", color: alpha("#000", 0.8) }}>You will experience this site in light mode.</Typography>
                        
                        <ThemeProvider theme={homeThemeDark}>
                            <Button sx={{ border: 2, borderColor: homeThemeDark.background.default, my: 1 }}>
                                <Typography sx={{ textTransform: "uppercase", fontSize: "0.8rem",
                                    color: homeThemeLight.primary.contrastText}}>
                                        Switch to dark mode
                                </Typography>
                            </Button>
                        </ThemeProvider>
                    </Box>
				</Box>
				<Footer />

			</ThemeProvider>
		</Container>
	)
}

export default Homepage;