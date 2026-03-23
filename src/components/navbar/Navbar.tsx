import { AppBar, Box, Container, CssBaseline, ThemeProvider, Toolbar, Typography } from "@mui/material";
import homeTheme from "../../styles/homeTheme"
import { Link } from "react-router";
import "./navbar.css";

//const navbarTextList: string[] = ["CS Portfolio", "Photography Portfolio", "Music Database", "Text RPG"];
//const navbarLinksList: string[] = ["cs-portfolio", "photography-portfolio", "music-database", "text-rpg"];

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
                <Link to="#" className="navbar-link navbar-link-active">CS Portfolio</Link>
                <Link to="/photography-portfolio" className="navbar-link">Photography Portfolio</Link>
                <Link to="/music-database" className="navbar-link">Music Database</Link>
                <Link to="/text-rpg" className="navbar-link">Text RPG</Link>
            </Box>

            <Link to="/" replace className="navbar-link navbar-link-home">Return to <br /> Landing Page</Link>

            </ThemeProvider>
        </Container>
    )
};

// const pagesContainer = document.getElementById("pages-container");

// function buildNavbarChild(text: string, link: string): HTMLElement {
//     const item = document.createElement("a");
//     item.textContent = text;
//     item.href = "/" + link;
//     item.className = "navbar-link";
//     // if(currentPage) {
//     //     item.href = "#";
//     //     item.classList.add("navbar-link-active");
//     // }
//     return item;
// }

// if(pagesContainer == null) {
//     console.log("Could not load navbar");
// }
// else {
//     for(let i=0; i<4; i++) {
//         pagesContainer!.appendChild(buildNavbarChild(navbarTextList[i], navbarLinksList[i]));
//     }
// }

export default Navbar;
