
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

                {/* Header box */}
				<Box sx = {{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", 
                        backgroundColor: csLight.primary.light,
                        pt: "4rem", py: "3rem", mt: "1.5rem" }}>

                    <Box sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "16rem", mt: "0.5rem", mb: "3rem" }}>
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