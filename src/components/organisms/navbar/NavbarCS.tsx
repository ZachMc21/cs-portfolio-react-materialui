import { Box, Container, CssBaseline, ThemeProvider, Link  } from "@mui/material";
import homeLight from "../../../styles/homeLight";
import csLight from '../../../styles/csLight';
import "./navbar.css";
import "./navbar_script";

import HomeFilledIcon from '@mui/icons-material/HomeFilled';

const NavbarCS = () => {

	return (

		<Container maxWidth={false} id="navbar" disableGutters sx = {{ height: "4em", width: "100%",
            display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
            p: 3,
            backgroundColor: homeLight.palette.primary.dark, color: homeLight.palette.primary.contrastText }}>

			<ThemeProvider theme={csLight}>
			<CssBaseline />

            <Box id="pages-container" sx = {{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: "2em" }}>
                <Link href="/cs-portfolio/skills" className="navbar-link">Skills</Link>
                <Link href="/cs-portfolio/projects" className="navbar-link">Projects</Link>
                <Link href="/cs-portfolio/extras" className="navbar-link">Extras</Link>
            </Box>

            {/* Icon on mobile, text on desktop */}
            <Link href="/cs-portfolio" className="navbar-link navbar-link-home">Return to <br /> CS Homepage</Link>
            <Link href="/" className="navbar-link navbar-icon-home">
                <HomeFilledIcon></HomeFilledIcon>
            </Link>

            </ThemeProvider>

            <script src="navbar_script.ts"></script>
            
        </Container>

    )
};

export default NavbarCS;