import { AppBar, Box, Container, CssBaseline, ThemeProvider, Toolbar, Typography } from "@mui/material";
import homeTheme from "../../styles/homeTheme"
import { Link } from "react-router";
import "./navbar.css";

interface NavbarProps {
	currentPage: string;
}

const Navbar = ({ currentPage }: NavbarProps) => {

	return (

		<Container id="navbar" disableGutters sx = {{ height: "4em", width: "100%",
            display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
            p: 3,
            backgroundColor: homeTheme.palette.primary.dark, color: homeTheme.palette.primary.contrastText }}>

			<ThemeProvider theme={homeTheme}>
			<CssBaseline />

            <Box id="pages-container" sx = {{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: "2em" }}>
                <Link to="#" replace className="navbar-link navbar-link-active">CS Portfolio</Link>
                <Link to="/photography-portfolio" replace className="navbar-link">Photography Portfolio</Link>
                <Link to="/music-database" replace className="navbar-link">Music Database</Link>
                <Link to="/text-rpg" replace className="navbar-link">Text RPG</Link>
            </Box>

            <Link to="/" replace className="navbar-link navbar-link-home">Return to <br /> Landing Page</Link>

            </ThemeProvider>
        </Container>
    )
};

const navbar = document.getElementById("navbar");
const pagesContainer = document.getElementById("pages-container");

//let pagesList: string[] = pageListRaw as string[];

//pageList.forEach(element: string, ) => {
//    pagesContainer?.append(
//
//    )
//});

export default Navbar;
