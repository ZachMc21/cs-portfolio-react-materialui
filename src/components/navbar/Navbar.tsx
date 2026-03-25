import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import homeTheme from "../../styles/homeTheme"
import { Link } from "react-router";
import "./navbar.css";
//import classnames from "classnames";
//import type { NavbarLink } from "../../types/navbar.types";
import "./navbar_script";

// interface NavbarProps {
//     listOfLinks: Array<NavbarLink>;
// 	currentPage: string;
// }

const Navbar = (/* args: NavbarProps */) => {

    // const location = useLocation();
    // let active = false;
    // if (location.pathname.includes("cs-portfolio")) {
    //     active = true;
    // }

	return (

		<Container id="navbar" disableGutters sx = {{ height: "4em", width: "100%",
            display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
            p: 3,
            backgroundColor: homeTheme.palette.primary.dark, color: homeTheme.palette.primary.contrastText }}>

			<ThemeProvider theme={homeTheme}>
			<CssBaseline />

            <Box id="pages-container" sx = {{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: "2em" }}>
                {/*This is where the links go, added via navbar.ts*/}
                {/* const parent: HTMLDivElement = document.getElementbyId("pages-container");
                listOfLinks.array.forEach(elem => {
                    parent
                }); */}
                {/* For each item: 
                  - set `to=` to # if on current page
                  - set navbar-link-active to true if on that page*/}
                <Link to="#" className="navbar-link">CS Portfolio</Link>
                <Link to="/photography-portfolio" className="navbar-link">Photography Portfolio</Link>
                <Link to="/music-database" className="navbar-link">Music Database</Link>
                <Link to="/text-rpg" className="navbar-link">Text RPG</Link>
            </Box>

            <Link to="/" replace className="navbar-link navbar-link-home">Return to <br /> Landing Page</Link>

            </ThemeProvider>
            
        </Container>

    )
};

export default Navbar;