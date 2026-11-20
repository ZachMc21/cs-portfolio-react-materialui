import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import homeLight from "../../../styles/homepage/homeLight";
import csLight from '../../../styles/csLight';
import "./navbar_script";

import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import { NavLink } from "react-router-dom";

const NavbarCS = () => {

	return (

		<Container maxWidth={false} id="navbar" disableGutters sx = {{ height: "4em", width: "100%",
            display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
            p: 3,
            backgroundColor: homeLight.palette.primary.dark, color: homeLight.palette.primary.contrastText }}>

			<ThemeProvider theme={csLight}>
			<CssBaseline />

            <Box id="pages-container" sx = {{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: "2em" }}>
                <NavLink to="/cs-portfolio/skills" className="navbar-link">Skills</NavLink>
                <NavLink to="/cs-portfolio/projects" className="navbar-link">Projects</NavLink>
                <NavLink to="/cs-portfolio/extras" className="navbar-link">Extras</NavLink>
            </Box>

            {/* Icon on mobile, text on desktop */}
            <NavLink to="/cs-portfolio" className="navbar-link navbar-link-home">Return to <br /> CS Homepage</NavLink>
            <NavLink to="/cs-portfolio" className="navbar-link navbar-icon-home">
                <HomeFilledIcon></HomeFilledIcon>
            </NavLink>

            </ThemeProvider>

            <script src="navbar_script.ts"></script>
            
        </Container>

    )
};

export default NavbarCS;