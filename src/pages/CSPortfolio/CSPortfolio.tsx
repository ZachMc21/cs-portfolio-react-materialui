
import { Box, Container, Icon, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider, Typography } from '@mui/material';
import Footer from '../../components/Footer';

import csLight from '../../styles/csLight';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Outlet } from 'react-router-dom';
import { LinkedIn } from '@mui/icons-material';


function CSPortfolio() {
	
	return (
		<Container id="cs-portfolio">
			<ThemeProvider theme={csLight}>

				<Box sx = {{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", 
                        backgroundColor: csLight.primary.light,
                        py: "4rem", mt: "1.5rem" }}>
                    <Box sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "16rem", mb: "3rem" }}>
                        <Box sx = {{ display: "flex", flexDirection: "column", alignContent: "left" }}>
                            <Typography variant="title" sx = {{ fontSize: "4rem", color: csLight.primary.dark, textAlign: "left", lineHeight: "3.85rem" }}>
                                Zach
                            </Typography>
                            <Typography variant="title" sx = {{ fontSize: "4rem", color: csLight.primary.dark, textAlign: "left", lineHeight: "3.85rem" }}>
                                Magloughlin
                            </Typography>
                        </Box>
                        <List sx= {{ display: "flex", flexDirection: "column", gap: 0 }}>
                            <ListItem sx = {{ p: 0 }}>
                                <ListItemButton sx = {{ p: 0, display: "flex", alignItems: "flex-start", gap: "0.25rem" }}>
                                    <Icon> <MailOutlineIcon /> </Icon>
                                    <ListItemText> Email</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx = {{ p: 0 }}>
                                <ListItemButton sx = {{ p: 0, display: "flex", alignItems: "flex-start", gap: "0.25rem"  }}>
                                    <Icon> <LinkedInIcon /> </Icon>
                                    <ListItemText> LinkedIn</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx = {{ p: 0 }}>
                                <ListItemButton sx = {{ p: 0, display: "flex", alignItems: "flex-start", gap: "0.25rem"  }}>
                                    <Icon> <GitHubIcon /> </Icon>
                                    <ListItemText> GitHub</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box> {/* End header row 1 */}
                    <Box sx = {{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "2rem" }}>
                        <Typography sx = {{ fontSize: "2rem", lineHeight: "2.25rem", color: csLight.primary.dark, textAlign: "right" }}>front-end</Typography>
                        <Typography sx = {{ fontSize: "2rem", lineHeight: "2.25rem", color: csLight.primary.dark, textAlign: "right" }}>full-stack</Typography>
                        <Typography sx = {{ fontSize: "2rem", lineHeight: "2.25rem", color: csLight.primary.dark, textAlign: "right" }}>software</Typography>
                        <Typography sx = {{ fontSize: "2rem", lineHeight: "2.25rem", color: csLight.primary.dark, textAlign: "right" }}>design</Typography>
                    </Box>
				</Box> {/* End header box*/}

				<Box id="section-links">
					<Typography id="section-jump-text"
                        sx = {{
                            color: csLight.primary.contrastText,
                            fontStyle: "italic", fontSize: "1.25rem",
                            textAlign: "left",
                        }}>
                        Jump to...
                    </Typography>
					{/* Text color: palette.primary.dark 
					Background color: palette.primary.light*/}
                    <Box id="section-links-container"
                        sx = {{flex: 1, flexDirection: "row"}}>
                        <Link href="#contact">
                            <Typography>Contact</Typography>
                        </Link>
                        <Link href="#about">
                            <Typography>About Me</Typography>
                        </Link>
                        <Link href="cs-portfolio/skills">
                            <Typography>Skills</Typography>
                        </Link>
                        <Link href="cs-portfolio/projects">
                            <Typography>Projects</Typography>
                        </Link>
                        <Link href="cs-portfolio/extras">
                            <Typography>Extras</Typography>
                        </Link>
                    </Box>
				</Box> {/* End section for page jumping */}

				<Box id="contact">
					<h1>Contact Me</h1>
					{ /* Text & link color: palette.primary.dark
					When link has been clicked, change it to contrastText
                    Or flip those two colors*/}
					<Link href="mailto:magloughlin.zach@gmail.com" className="contact-socials" id="email">
						<MailOutlineIcon/>
						<Typography>Email</Typography>
					</Link>
					<Link href="https://www.linkedin.com/in/zach-magloughlin/" className="contact-socials" id="linked-in">
						<LinkedInIcon/>
						<Typography>LinkedIn</Typography>
					</Link>
					<Link href="https://github.com/ZachMc21" className="contact-socials" id="git-hub">
						<GitHubIcon/>
						<Typography>GitHub</Typography>
					</Link>
				</Box> {/* End contact & socials */}

				<Box id="about">
					<Typography>TODO About Me blurb goes here.</Typography>
				</Box>

				<Box id="skills">
					<Typography>TODO fancy link to skills page</Typography>
				</Box>

				<Box id="projects">
					<Typography>TODO fancy link to projects page</Typography>
				</Box>

				<Box id="extras">
					<Typography>TODO fancy link to extras page</Typography>
				</Box>

				<Footer />
			</ThemeProvider>
            <Outlet />
		</Container>
	);

}

export default CSPortfolio;