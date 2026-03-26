import { Box, Container, CssBaseline, ThemeProvider, Link } from "@mui/material";
import homeTheme from "../../styles/homeTheme"
import "./navbar.css";
//import classnames from "classnames";
//import type { NavbarLink } from "../../types/navbar.types";
import "./navbar_script";

// interface NavbarProps {
//     listOfLinks: Array<NavbarLink>;
// 	currentPage: string;
// }

const NavbarCS = (/* args: NavbarProps */) => {

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
                <Link href="/cs-portfolio/skills" className="navbar-link">Skills</Link>
                <Link href="/cs-portfolio/projects" className="navbar-link">Projects</Link>
                <Link href="/cs-portfolio/extras" className="navbar-link">Extras</Link>
            </Box>

            <Link href="/cs-portfolio" className="navbar-link navbar-link-home">Return to <br /> Portfolio Homepage</Link>

            </ThemeProvider>

            <script src="navbar_script.ts"></script>
            
        </Container>

    )
};

export default NavbarCS;