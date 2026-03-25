
import { Box, Container, Icon, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider, Typography } from '@mui/material';
import Footer from '../../components/Footer';

import csLight from '../../styles/csLight';
import './CSPortfolio.css'

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Outlet } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar";
import DocumentTitle from '../../utils/documentTitle';
import homeTheme from '../../styles/homeTheme';


function CSPortfolio() {
	
	return (
		<Container id="cs-portfolio">
			<ThemeProvider theme={csLight}>
            <ThemeProvider theme={homeTheme}>

                <Navbar currentPage="cs" />

                {/* Header box */}
				<Box id="header-container" sx = {{backgroundColor: csLight.primary.light,
                    pt: "5rem", pb: "3rem", mt: "7rem", mx: "3rem" }}>

                    <Box id="header-top" sx = {{ mb: "2rem" }}>
                        <Box id="header-name" sx = {{ display: "flex", flexDirection: "column", alignContent: "left", gap: "1rem", py: "2rem" }}>
                            <Typography variant="title" sx = {{ color: csLight.primary.dark, lineHeight: "3.85rem" }}>
                                Zach
                            </Typography>
                            <Typography variant="title" sx = {{ color: csLight.primary.dark, lineHeight: "3.85rem" }}>
                                Magloughlin
                            </Typography>
                        </Box>
                        <Box id="header-skill-areas">
                            <Box className="header-skills-row">
                                <Typography variant="cs_subtitle">front-end</Typography>
                                <Typography variant="cs_subtitle">full-stack</Typography>
                            </Box>
                        
                            <Box className="header-skills-row">
                                <Typography variant="cs_subtitle">software</Typography>
                                <Typography variant="cs_subtitle">design</Typography>
                            </Box>
                        </Box>
                    </Box> {/* End header-top */}

                    <Box id="header-links" sx= {{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "4rem", pb: 0, mb: "1rem" }}>
                        <Link className="header-link" sx = {{ textDecoration: "none", color: csLight.primary.dark, p: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                            href="mailto:magloughlin.zach@gmail.com" target="_blank" rel="noopener noreferrer">
                            <MailOutlineIcon sx = {{ fontSize: "1.75rem" }} />
                            <Typography sx = {{ fontSize: "1.75rem" }}> Email</Typography>
                        </Link>
                        <Link className="header-link" sx = {{ textDecoration: "none", color: csLight.primary.dark, p: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem" }}
                            href="https://www.linkedin.com/in/zach-magloughlin/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon sx = {{ fontSize: "1.75rem" }} />
                            <Typography sx = {{ fontSize: "1.75rem" }}> LinkedIn</Typography>
                        </Link>
                        <Link className="header-link" sx = {{ textDecoration: "none", color: csLight.primary.dark, p: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem" }}
                            href="https://github.com/ZachMc21" target="_blank" rel="noopener noreferrer" >
                            <GitHubIcon sx = {{ fontSize: "1.75rem" }} />
                            <Typography sx = {{ fontSize: "1.75rem" }}> GitHub</Typography>
                        </Link>
                    </Box> {/* End header row 2*/}

				</Box> {/* End header box*/}

				<Box id="section-links">
                    {/*
					<Typography id="section-jump-text"
                        sx = {{
                            color: csLight.primary.contrastText,
                            fontStyle: "italic", fontSize: "1.25rem", textAlign: "left", 
                            mx: "1rem", mt: "2rem"
                        }}>
                        Go to...
                    </Typography>
                    */}
					{/* Text color: palette.primary.dark 
					Background color: palette.primary.light*/}
                    <Box id="section-links-container"
                        sx = {{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "space-around", pt: 5, pb: 2 }}>
                        <Box className="section-links-row">
                            <Link href="#header-links" sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", color: homeTheme.palette.primary.dark }}>
                                <KeyboardArrowDownIcon sx = {{ fontSize: "1.5rem" }} />
                                <Typography sx = {{ fontSize: "1.5rem" }}>Contact</Typography>
                            </Link>
                            <Link href="#about" sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", color: homeTheme.palette.primary.dark }}>
                                <KeyboardArrowDownIcon sx = {{ fontSize: "1.5rem" }} />
                                <Typography sx = {{ fontSize: "1.5rem" }} >About Me</Typography>
                            </Link>
                        </Box>
                        <Box className="section-links-row">
                            <Link href="cs-portfolio/skills" sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", color: homeTheme.palette.primary.dark }}>
                                <KeyboardArrowRightIcon sx = {{ fontSize: "1.5rem" }} />
                                <Typography sx = {{ fontSize: "1.5rem" }} >Skills</Typography>
                            </Link>
                            <Link href="cs-portfolio/projects" sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", color: homeTheme.palette.primary.dark }}>
                                <KeyboardArrowRightIcon sx = {{ fontSize: "1.5rem" }} />
                                <Typography sx = {{ fontSize: "1.5rem" }} >Projects</Typography>
                            </Link>
                            <Link href="cs-portfolio/extras" sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", color: homeTheme.palette.primary.dark }}>
                                <KeyboardArrowRightIcon sx = {{ fontSize: "1.5rem" }} />
                                <Typography sx = {{ fontSize: "1.5rem" }} >Extras</Typography>
                            </Link>
                        </Box>
                    </Box>
				</Box> {/* End section for page jumping */}

				<Box id="about">
                    <Box id="about-title" sx = {{ p: "1rem" }}>
                        <Typography variant="title">About Me</Typography>
                    </Box>
                    <Box id="about-content" sx = {{ display: "flex", flexDirection: "row", gap: 0, pb: "2rem" }}>
                        <Box id="about-blurb" sx = {{ display: "flex", flexDirection: "column", alignContent: "flex-start", flexShrink: 1, pb: "1rem",
                            pr: "2rem", borderRight: 2, borderColor: csLight.primary.dark 
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
                        <Box id="about-education" sx = {{ pl: "2rem", ml: 0 }}>
                            <Typography id="education-header" variant="h1" sx={{ display: "flex", justifySelf: "left", pb: "0.5rem" }}>Education</Typography>
                            <Box id="about-education" sx = {{ pr: "1rem" }}>
                                <Typography>B.S. Computer Science</Typography>
                                <Typography>Colorado School of Mines</Typography>
                                <Typography>2021 - 2025</Typography>
                            </Box>
                        </Box>
                    </Box>
				</Box>

                {/*TODO: Convert this to a grid layout (2wide or 1wide)*/}
                <Box id="pages-overview">
                    <Box id="skills" className="pages-overview-child">
                        <Link className="pages-link" href="cs-portfolio/skills" sx = {{ color: csLight.primary.dark, textDecorationColor: csLight.primary.dark }}>
                            <Typography>Skills</Typography>
                            <KeyboardArrowRightIcon />
                        </Link>
                        <Typography className="pages-text">A look at my technical and non-technical skills, <br className="line-break"/> learned through education, work, and personal projects.</Typography>
                    </Box>

                    <Box id="projects" className="pages-overview-child">
                        <Link className="pages-link" href="cs-portfolio/projects" sx = {{ color: csLight.primary.dark, textDecorationColor: csLight.primary.dark }}>
                            <Typography>Projects</Typography>
                            <KeyboardArrowRightIcon />
                        </Link>
                            <Typography className="pages-text">A description of school, work, and personal projects I've worked on. <br className="line-break"/> Includes screenshots, code snippets, and retrospectives.</Typography>
                    </Box>

                    <Box id="extras" className="pages-overview-child">
                        <Link className="pages-link" href="cs-portfolio/extras" sx = {{ color: csLight.primary.dark, textDecorationColor: csLight.primary.dark }}>
                            <Typography>Extras</Typography>
                            <KeyboardArrowRightIcon />
                        </Link>
                        <Typography className="pages-text">Odds and ends - extracurriculars, volunteer work, and hobbies.</Typography>
                    </Box>
                </Box>

				<Footer />
			</ThemeProvider>
            </ThemeProvider>
            <Outlet />
		</Container>
	);

}

export default CSPortfolio;