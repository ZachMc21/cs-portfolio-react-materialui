
import { Box, Container, Link, ThemeProvider, Typography } from '@mui/material';
import Footer from '../../components/Footer';

import csLight from '../../styles/csLight';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Outlet } from 'react-router-dom';

function CSPortfolio() {
	
	return (
		<Container id="cs-portfolio">
			<ThemeProvider theme={csLight}>

				<Box id="name"
                    sx = {{
                        backgroundColor: csLight.primary.light,
                        py: "4rem", mt: "1rem" }}>
					<Typography variant="h1" id="first-name" sx = {{ color: csLight.primary.dark }}>
						Zach
					</Typography>
					<Typography variant="h1" id="last-name" sx = {{ color: csLight.primary.dark }}>
						Magloughlin
					</Typography>
				</Box> {/* End header */}

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