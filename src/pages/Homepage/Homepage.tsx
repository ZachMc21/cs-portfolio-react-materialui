import { CssBaseline, Box, Typography, ThemeProvider, Button, alpha } from "@mui/material";
import Footer from "../../components/molecules/Footer";
import homeThemeLight from "../../styles/homeLight";
import homeThemeDark from "../../styles/homeDark";
import HomepageButton from "../../components/atoms/HomepageButton";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import DocumentTitle from "../../utils/DocumentTitle";

import "../../styles/homepage.scss";

function Homepage() {
    
    DocumentTitle("Home");

	return (
		<Box id="enter-site"
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center",
                maxWidth: "100vw", p: 0, m: 0
                }}>
			<ThemeProvider theme={homeThemeLight}>
				<CssBaseline />

				<Box id="homepage-content"
					sx={{
						display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"
					    }}>
					<Box
                        sx={{ p: 5, py: 10, mb: 8, mt: 6, mx: 4,
							backgroundColor: homeThemeLight.palette.primary.contrastText, opacity: 0.8,
                            }}>
                        <Typography variant="title" id="page-title"
                            sx={{ fontSize: 52, color: "white" }}>
                            Zach Magloughlin
                        </Typography>
					</Box>
					<Box id="home-buttons-container" sx={{ mx: 0, mb: 10 }}>
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

                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", mb: 12 }}>
                        <Typography sx={{ fontStyle: "italic", color: alpha("#FFF", 0.8) }}>You will experience this site in light mode.</Typography>
                        
                        <ThemeProvider theme={homeThemeDark}>
                        <Button sx={{ display: "flex", flexDirection: "column", mx: "auto", border: 2, borderColor: alpha("#FFF", 0.8), my: 1 }}>
                            <Typography sx={{ textTransform: "uppercase", fontSize: "0.8rem",
                                color: alpha("#FFF", 0.8)}}>
                                    Switch to dark mode
                            </Typography>
                            <Typography sx={{ textTransform: "lowercase", fontSize: "0.75rem", color: alpha("#FFF", 0.8)
                             }}>
                                (under construction)
                            </Typography>
                        </Button>
                        </ThemeProvider>
                    </Box>
				</Box>

                <Footer bgColor="" tColor="white"/>
			</ThemeProvider>
		</Box>
	)
}

export default Homepage;