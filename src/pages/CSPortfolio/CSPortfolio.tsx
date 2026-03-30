
import { Box, Container, Link, ThemeProvider, Typography } from '@mui/material';
import Footer from '../../components/Footer';

import csLight from '../../styles/csLight';
import './CSPortfolio.css'

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Outlet } from 'react-router-dom';
import NavbarCS from "../../components/navbar/NavbarCS";
import DocumentTitle from "../../utils/DocumentTitle";
import homeTheme from '../../styles/homeTheme';


function CSPortfolio() {
	
    DocumentTitle("Zach Magloughlin | Computer Science Portfolio");

	return (
		<Box id="cs-portfolio">
			<ThemeProvider theme={csLight}>
            <ThemeProvider theme={homeTheme}>

                <NavbarCS />

                {/* Header box */}
				<Box id="header-container" sx = {{backgroundColor: csLight.palette.secondary.light }}>

                    <Box id="header-top" sx = {{ mb: "2rem" }}>
                        <Box id="header-name" sx = {{ display: "flex", flexDirection: "column", alignContent: "left", gap: "1rem", py: "2rem" }}>
                            <Typography className="cs-title" sx = {{ color: csLight.palette.secondary.contrastText, lineHeight: "3.85rem" }}>
                                Zach
                            </Typography>
                            <Typography className="cs-title" sx = {{ color: csLight.palette.secondary.contrastText, lineHeight: "3.85rem" }}>
                                Magloughlin
                            </Typography>
                        </Box>
                        <Box id="header-skill-areas">
                            <Box className="header-skills-row">
                                <Typography className="cs-header-subtitle">front-end</Typography>
                                <Typography className="cs-header-subtitle">full-stack</Typography>
                            </Box>
                            <Box className="header-skills-row">
                                <Typography className="cs-header-subtitle">software</Typography>
                                <Typography className="cs-header-subtitle">design</Typography>
                            </Box>
                        </Box>
                    </Box> {/* End header-top */}

                    <Box id="header-links" sx= {{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "4rem", pb: 0, mb: "1rem" }}>
                        <Link className="header-link" sx = {{ textDecoration: "none", color: csLight.palette.secondary.contrastText, p: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                            href="mailto:magloughlin.zach@gmail.com" target="_blank" rel="noopener noreferrer">
                            <MailOutlineIcon sx = {{ fontSize: "1.25rem" }} />
                            <Typography sx = {{ fontSize: "1.25rem" }}> Email</Typography>
                        </Link>
                        <Link className="header-link" sx = {{ textDecoration: "none", color: csLight.palette.secondary.contrastText, p: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem" }}
                            href="https://www.linkedin.com/in/zach-magloughlin/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon sx = {{ fontSize: "1.25rem" }} />
                            <Typography sx = {{ fontSize: "1.25rem" }}> LinkedIn</Typography>
                        </Link>
                        <Link className="header-link" sx = {{ textDecoration: "none", color: csLight.palette.secondary.contrastText, p: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem" }}
                            href="https://github.com/ZachMc21" target="_blank" rel="noopener noreferrer" >
                            <GitHubIcon sx = {{ fontSize: "1.25rem" }} />
                            <Typography sx = {{ fontSize: "1.25rem" }}> GitHub</Typography>
                        </Link>
                    </Box> {/* End header row 2*/}
				</Box> {/* End header box*/}

                {/* Text color: palette.primary.dark 
                Background color: palette.primary.light*/}
                <Box id="section-links-container"
                    sx = {{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "space-around", pt: 5, mb: 5 }}>
                    <Box className="section-links-row">
                        <Link className="section-link" href="#header-links"
                            sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
                            color: csLight.palette.primary.contrastText }}>
                            <KeyboardArrowDownIcon sx = {{ fontSize: "1.5rem" }} />
                            <Typography sx = {{ fontSize: "1.5rem" }}>Contact</Typography>
                        </Link>
                        <Link className="section-link" href="#about"
                            sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
                            color: csLight.palette.primary.contrastText }}>
                            <KeyboardArrowDownIcon sx = {{ fontSize: "1.5rem" }} />
                            <Typography sx = {{ fontSize: "1.5rem" }} >About Me</Typography>
                        </Link>
                    </Box>
                    <Box className="section-links-row">
                        <Link className="section-link nav-link" href="cs-portfolio/skills"
                            sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
                            color: csLight.palette.primary.contrastText }}>
                            <KeyboardArrowRightIcon sx = {{ fontSize: "1.5rem" }} />
                            <Typography sx = {{ fontSize: "1.5rem" }} >Skills</Typography>
                        </Link>
                        <Link className="section-link nav-link" href="cs-portfolio/projects"
                            sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
                            color: csLight.palette.primary.contrastText }}>
                            <KeyboardArrowRightIcon sx = {{ fontSize: "1.5rem" }} />
                            <Typography sx = {{ fontSize: "1.5rem" }} >Projects</Typography>
                        </Link>
                        <Link className="section-link nav-link" href="cs-portfolio/extras"
                            sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
                            color: csLight.palette.primary.contrastText }}>
                            <KeyboardArrowRightIcon sx = {{ fontSize: "1.5rem" }} />
                            <Typography sx = {{ fontSize: "1.5rem" }} >Extras</Typography>
                        </Link>
                    </Box>
				</Box> {/* End section for page jumping */}

				<Box id="about">
                    <Box>
                        <Typography id="about-header" sx={{ color: csLight.palette.primary.contrastText }}>About Me</Typography>
                    </Box>
                    <Box id="about-content" sx = {{ display: "flex", flexDirection: "row", gap: 0, pb: "2rem" }}>
                        <Box id="about-blurb" sx = {{ display: "flex", flexDirection: "column", alignContent: "flex-start", flexShrink: 1, pb: "1rem",
                            pr: "2rem", borderRight: 2, borderColor: csLight.palette.primary.dark 
                        }}>
                            <Typography sx = {{ marginBottom: "0.5rem", lineHeight: "1.25rem" }}>
                                Hello hello! Thanks for stopping by.</Typography>
                            <Typography sx = {{ marginBottom: "0.5rem", lineHeight: "1.25rem" }}>
                                Zach is a jack-of-all-trades when it comes to computer science. He has experience and interest in
                                back-end development, database management, and data science.</Typography>
                            <Typography sx = {{ marginBottom: "0.5rem", lineHeight: "1.25rem" }}>
                                He has lived in Colorado his whole life. He grew up in Fort Collins,
                                moved to Golden for college, and now lives in Denver.</Typography>
                        </Box>
                        <Box id="about-education-container" sx = {{ pl: "2rem", ml: 0 }}>
                            <Typography id="education-header" sx={{ display: "flex", justifySelf: "left", pb: "0.5rem", color: csLight.palette.primary.contrastText }}>Education</Typography>
                            <Box id="about-education-text" sx = {{ pr: "1rem" }}>
                                <Typography>B.S. Computer Science</Typography>
                                <Typography>Colorado School of Mines</Typography>
                                <Typography>2021 - 2025</Typography>
                            </Box>
                        </Box>
                    </Box>
				</Box>

                {/*TODO: Convert this to a grid layout (2wide or 1wide)*/}
                <Box id="pages-overview">
                    <Box id="skills-link" className="pages-overview-child">
                        <Link className="pages-link" href="cs-portfolio/skills" sx = {{ color: csLight.palette.primary.contrastText, textDecorationColor: csLight.palette.primary.contrastText }}>
                            <Typography>Skills</Typography>
                            <KeyboardArrowRightIcon />
                        </Link>
                        <Typography className="pages-text">A look at my technical and non-technical skills, <br className="line-break"/> learned through education, work, and personal projects.</Typography>
                    </Box>

                    <Box id="projects-link" className="pages-overview-child">
                        <Link className="pages-link" href="cs-portfolio/projects" sx = {{ color: csLight.palette.primary.contrastText, textDecorationColor: csLight.palette.primary.contrastText }}>
                            <Typography>Projects</Typography>
                            <KeyboardArrowRightIcon />
                        </Link>
                            <Typography className="pages-text">A description of school, work, and personal projects I've worked on. <br className="line-break"/> Includes screenshots, code snippets, and retrospectives.</Typography>
                    </Box>

                    <Box id="extras-link" className="pages-overview-child">
                        <Link className="pages-link" href="cs-portfolio/extras" sx = {{ color: csLight.palette.primary.contrastText, textDecorationColor: csLight.palette.primary.contrastText }}>
                            <Typography>Extras</Typography>
                            <KeyboardArrowRightIcon />
                        </Link>
                        <Typography className="pages-text">Odds and ends - extracurriculars, volunteer work, and hobbies.</Typography>
                    </Box>
                </Box>

                <Footer bgColor="" tColor="csLight.palette.primary.contrastText" />
			</ThemeProvider>
            </ThemeProvider>
            <Outlet />
		</Box>
	);
}

export default CSPortfolio;