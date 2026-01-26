
import { Box, Container, Icon, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider, Typography } from '@mui/material';
import Footer from '../../components/Footer';

import csLight from '../../styles/csLight';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Outlet } from 'react-router-dom';


function CSPortfolio() {
	
	return (
		<Container id="cs-portfolio">
			<ThemeProvider theme={csLight}>

                {/* Header box */}
				<Box sx = {{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center",
                        backgroundColor: csLight.primary.light,
                        pt: "5rem", pb: "3rem", mt: "3rem" }}>

                    <Box sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "20rem", mt: "0.5rem", mb: "4rem" }}>
                        <Box sx = {{ display: "flex", flexDirection: "column", alignContent: "left", gap: "1rem" }}>
                            <Typography variant="title" sx = {{ fontSize: "5rem", color: csLight.primary.dark, textAlign: "left", lineHeight: "3.85rem" }}>
                                Zach
                            </Typography>
                            <Typography variant="title" sx = {{ fontSize: "5rem", color: csLight.primary.dark, textAlign: "left", lineHeight: "3.85rem" }}>
                                Magloughlin
                            </Typography>
                        </Box>
                        <Box sx = {{ display: "flex", flexDirection: "column", gap: 0 }}>
                            <Typography sx = {{ fontSize: "2rem", lineHeight: "2.25rem", color: csLight.primary.dark, textAlign: "right" }}>front-end</Typography>
                            <Typography sx = {{ fontSize: "2rem", lineHeight: "2.25rem", color: csLight.primary.dark, textAlign: "right" }}>full-stack</Typography>
                            <Typography sx = {{ fontSize: "2rem", lineHeight: "2.25rem", color: csLight.primary.dark, textAlign: "right" }}>software</Typography>
                            <Typography sx = {{ fontSize: "2rem", lineHeight: "2.25rem", color: csLight.primary.dark, textAlign: "right" }}>design</Typography>
                        </Box>
                    </Box> {/* End header row 1 */}

                    <List sx= {{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "3rem", pb: 0 }} id="contact">
                        <ListItem sx = {{ px: 0 }}>
                            <ListItemButton sx = {{ px: 1, py: 0.5, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem" }}
                                href="mailto:magloughlin.zach@gmail.com" target="_blank" rel="noopener noreferrer">
                                <MailOutlineIcon fontSize="large" />
                                <ListItemText sx = {{ fontSize: "3rem", lineHeight: "2.25rem"}}> Email</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx = {{ p: 0 }}>
                            <ListItemButton sx = {{ px: 1, py: 0.5, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem" }}
                                href="https://www.linkedin.com/in/zach-magloughlin/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon fontSize="large" > </LinkedInIcon>
                                <ListItemText sx = {{ fontSize: "3rem", lineHeight: "2.25rem"}}> LinkedIn</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx = {{ p: 0 }}>
                            <ListItemButton sx = {{ px: 1, py: 0.5, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem" }}
                                href="https://github.com/ZachMc21" target="_blank" rel="noopener noreferrer" >
                                <GitHubIcon  fontSize="large" />
                                <ListItemText sx = {{ fontSize: "3rem", lineHeight: "2.25rem"}}> GitHub</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List> {/* End header row 2*/}

				</Box> {/* End header box*/}

				<Box id="section-links">
					<Typography id="section-jump-text"
                        sx = {{
                            color: csLight.primary.contrastText,
                            fontStyle: "italic", fontSize: "1.25rem", textAlign: "left", 
                            mx: "1rem", mt: "2rem"
                        }}>
                        Go to...
                    </Typography>
					{/* Text color: palette.primary.dark 
					Background color: palette.primary.light*/}
                    <Box id="section-links-container"
                        sx = {{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "space-around", py: 2 }}>
                        <Link href="#contact" sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <KeyboardArrowDownIcon sx = {{ fontSize: "1.5rem" }} />
                            <Typography sx = {{ fontSize: "1.5rem" }}>Contact</Typography>
                        </Link>
                        <Link href="#about" sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <KeyboardArrowDownIcon sx = {{ fontSize: "1.5rem" }} />
                            <Typography sx = {{ fontSize: "1.5rem" }} >About Me</Typography>
                        </Link>
                        <Link href="cs-portfolio/skills" sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <KeyboardArrowRightIcon sx = {{ fontSize: "1.5rem" }} />
                            <Typography sx = {{ fontSize: "1.5rem" }} >Skills</Typography>
                        </Link>
                        <Link href="cs-portfolio/projects" sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <KeyboardArrowRightIcon sx = {{ fontSize: "1.5rem" }} />
                            <Typography sx = {{ fontSize: "1.5rem" }} >Projects</Typography>
                        </Link>
                        <Link href="cs-portfolio/extras" sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <KeyboardArrowRightIcon sx = {{ fontSize: "1.5rem" }} />
                            <Typography sx = {{ fontSize: "1.5rem" }} >Extras</Typography>
                        </Link>
                    </Box>
				</Box> {/* End section for page jumping */}

				<Box id="about" sx = {{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                    <Typography variant="title" sx = {{ fontSize: "3rem", p: "1rem" }}>About Me</Typography>
                    <Box id="about-content" sx = {{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "3rem", pb: "2rem" }}>
                        <Box id="about-blurb" sx = {{ display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: 1 }}>
                            <Typography variant="bodyLeft" sx = {{ marginBottom: "0.5rem", lineHeight: "1.25rem" }}>
                                Hello hello! Thanks for stopping by.</Typography>
                            <Typography variant="bodyLeft" sx = {{ marginBottom: "0.5rem", lineHeight: "1.25rem" }}>
                                Zach is a jack-of-all-trades when it comes to computer science.
                                Although he has a preference for front-end development, he has experience and interest in
                                back-end development, database management, and data science.</Typography>
                            <Typography variant="bodyLeft" sx = {{ marginBottom: "0.5rem", lineHeight: "1.25rem" }}>
                                He has lived in Colorado his whole life. He grew up in Fort Collins,
                                moved to Golden for college, and now lives in Denver.</Typography>
                        </Box>
                        <Box id="about-education" sx = {{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                            <Typography variant="bodyRight" sx = {{ textWrap: "nowrap", marginBottom: "0.5rem", lineHeight: "1.25rem" }}>B.S. Computer Science</Typography>
                            <Typography variant="bodyRight" sx = {{ textWrap: "nowrap", marginBottom: "0.5rem", lineHeight: "1.25rem" }}>Colorado School of Mines</Typography>
                            <Typography variant="bodyRight" sx = {{ textWrap: "nowrap", marginBottom: "0.5rem", lineHeight: "1.25rem" }}>2021 - 2025</Typography>
                        </Box>
                    </Box>
				</Box>

                {/*TODO: Convert this to a grid layout (2wide or 1wide)*/}
                <Box sx = {{ display: "flex", flexDirection: "column" }}>
                    <Box id="skills" sx = {{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", columnGap: "4rem" }}>
                        <Link href="cs-portfolio/skills" sx = {{ display: "flex", flexDirection: "row", alignItems: "center", color: csLight.primary.dark, textDecoration: "none", flexShrink: 1 }}>
                            <Typography variant="title" sx = {{ fontSize: "3em" }}>Skills</Typography>
                            <KeyboardArrowRightIcon sx = {{ fontSize: "4em" }} />
                        </Link>
                        <Box sx = {{ display: "flex", flexDirection: "column" }} >
                            <Typography variant="bodyRight" sx = {{ }}>A look at my technical and non-technical skills,</Typography>
                            <Typography variant="bodyRight" sx = {{ }}>learned through education, work, and personal projects.</Typography>
                        </Box>
                    </Box>

                    <Box id="projects" sx = {{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", columnGap: "4rem" }}>
                        <Link href="cs-portfolio/projects" sx = {{ display: "flex", flexDirection: "row", alignItems: "center", color: csLight.primary.dark, textDecoration: "none", flexShrink: 1 }}>
                            <Typography variant="title" sx = {{ fontSize: "3em" }}>Projects</Typography>
                            <KeyboardArrowRightIcon sx = {{ fontSize: "4em" }} />
                        </Link>
                        <Box sx = {{ display: "flex", flexDirection: "column" }} >
                            <Typography variant="bodyRight" sx = {{ }}>A description of school, work, and personal projects I've worked on.</Typography>
                            <Typography variant="bodyRight" sx = {{ }}>Includes screenshots, code snippets, and retrospectives.</Typography>
                        </Box>
                    </Box>

                    <Box id="extras" sx = {{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", columnGap: "4rem" }}>
                        <Link href="cs-portfolio/extras" sx = {{ display: "flex", flexDirection: "row", alignItems: "center", color: csLight.primary.dark, textDecoration: "none", flexShrink: 1 }}>
                            <Typography variant="title" sx = {{ fontSize: "3em" }}>Extras</Typography>
                            <KeyboardArrowRightIcon sx = {{ fontSize: "4em" }} />
                        </Link>
                        <Typography variant="bodyRight" sx = {{ display: "flex"}}>Odds and ends - extracurriculars, volunteer work, and hobbies.</Typography>
                    </Box>
                </Box>

				<Footer />
			</ThemeProvider>
            <Outlet />
		</Container>
	);

}

export default CSPortfolio;