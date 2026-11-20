import { CssBaseline, Box, Typography, ThemeProvider, Button, alpha, createTheme, useTheme } from "@mui/material";
import Footer from "../../components/molecules/Footer";
//import homeThemeLight from "../../styles/homepage/homeLight";
//import homeThemeDark from "../../styles/homepage/homeDark";
//import HomepageButton from "../../components/atoms/HomepageButton";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import DocumentTitle from "../../utils/DocumentTitle";

import "../../styles/homepage/homepage.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Homepage() {
    
    DocumentTitle("Home");

	// Define theme settings
	// const light = {
	// 	palette: {
	// 		mode: "light",
	// 	},
	// };

	const theme = createTheme({
		colorSchemes: {
			light: {
				palette: {
					background: {
						default: "#dff6f7",
					},
					primary: {
						main: "#98c2c0ff",
						contrastText: "#0e4975",
					},
					secondary: {
						main: "#E3ACA0",
						contrastText: "#0B1D23", 
					}
				},
			},
			dark: {
				palette: {
					background: {
						default: "#0B1D23",
					},
					primary: {
						main: "#0B1D23",
						contrastText: "#7DC6C3",
					},
					secondary: {
						main: "#0B1D23",
						contrastText: "#E3ACA0", 
					}
				}
			}
		}
	});

	//Default to light theme
	const [ isDarkTheme, setIsDarkTheme ] = useState(false);

	// //Change the theme when the button is pressed
	const changeTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	};

	return (
		<ThemeProvider theme={theme}>
		<Box id="enter-site"
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center",
                maxWidth: "100vw", p: 0, m: 0
                }}>
      <CssBaseline />

				<Box id="homepage-content"
					sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center" }}>
					<Box sx={{ p: 5, py: 10, mb: 8, mt: 6, mx: 4, backgroundColor: 'primary.contrastText', opacity: 0.8 }}>
            <Typography id="page-title" sx={{ fontSize: 52, color: "white" }}>
              Zach Magloughlin
            </Typography>
					</Box>

					<Box id="homepage-buttons-container" sx={{ mx: 0, mb: 10 }}>
            <Box className="home-column">
              <Button component={Link} className="homepage-button" to="cs-portfolio" variant="contained" disableElevation
                sx={{ color: "primary.contrastText", backgroundColor: "background.default.dark"}}>
                  <Typography sx={{ textWrap: 'balance', mb: "0.5rem" }}>
                    Enter CS Portfolio
                  </Typography>
                  <DoubleArrowIcon />
              </Button>
              
              <Button component={Link} className="homepage-button" to="photography-portfolio" variant="contained" disableElevation
                sx={{ color: "primary.contrastText", backgroundColor: "background.default.dark"}}>
                <Typography sx={{ textWrap: 'balance', mb: "0.5rem" }}>Enter Photography Portfolio</Typography>
                <DoubleArrowIcon />
              </Button>
            </Box>

            <Box className="home-column">
              <Button component={Link} className="homepage-button" to="music-database" variant="contained" disableElevation
                sx={{ color: "primary.contrastText", backgroundColor: "background.default.dark"}}>
                <Typography sx={{ textWrap: 'balance', mb: "0.5rem" }}>Enter Music Database</Typography>
                <DoubleArrowIcon />
              </Button>

              <Button component={Link} className="homepage-button" to="text-rpg" variant="contained" disableElevation
                sx={{ color: "primary.contrastText", backgroundColor: "background.default.dark"}}>
                <Typography sx={{ textWrap: 'balance', mb: "0.5rem" }}>Enter Text RPG</Typography>
                <DoubleArrowIcon />
              </Button>
            </Box>

					</Box> {/* end homepage buttons */}

          {/* light/dark mode toggle */}
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", mb: 12 }}>
            <Typography sx={{ fontStyle: "italic", color: alpha("#FFF", 0.8) }}>You will experience this site in {isDarkTheme ? "dark" : "light"} mode.</Typography>
                      
            <Button sx={{ display: "flex", flexDirection: "column", mx: "auto", border: 2, borderColor: alpha("#FFF", 0.8), my: 1 }}
              onClick={changeTheme}>
                            <Typography sx={{ textTransform: "uppercase", fontSize: "0.8rem", color: alpha("#FFF", 0.8)}}>
                Switch to {isDarkTheme ? 'light' : 'dark'} mode
                            </Typography>
            </Button>

            {/* <Button sx={{ display: "flex", flexDirection: "column", mx: "auto", border: 2, borderColor: alpha("#FFF", 0.8), my: 1 }}
            onClick={changeTheme}>
                          <Typography sx={{ textTransform: "uppercase", fontSize: "0.8rem", color: alpha("#FFF", 0.8)}}>
              Switch to {isDarkTheme ? 'light' : 'dark'} mode
                          </Typography>
            </Button> */}
          
                      {/* <ThemeProvider theme={homeThemeDark}>
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
                      </ThemeProvider> */}
          </Box>
        </Box> {/* end #homepage-content */}

      <Footer bgColor="" textColor={useTheme().palette.primary.main}/>
		</Box> {/* end #enter-site */}
		</ThemeProvider>
	)
}

export default Homepage;