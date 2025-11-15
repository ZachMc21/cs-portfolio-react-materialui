
import { Box, Container, Link, ThemeProvider, Typography } from '@mui/material';
import Footer from './custom_components/Footer';

import csThemeLight from "./themes/theme_cs";

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function CSPortfolio() {
	
	return (
		<Container id="cs-portfolio">

			<ThemeProvider theme={csThemeLight}>

				<Box id="name"
                    sx = {{ backgroundColor: csThemeLight.palette.primary.light, width: "100vw", margin: 0 }}>
					<Typography variant="h1" id="first-name">
						Zach
					</Typography>
					<Typography variant="h1" id="last-name">
						Magloughlin
					</Typography>
				</Box> {/* End header */}

				<Box id="section-links">
					<Typography>Jump to section...</Typography>
					{/* Text color: palette.primary.dark 
					Background color: palette.primary.light*/}
					<Link href="#contact-socials" className="cs-link">Contact Me</Link>
					<Link href="#overview" className="cs-link">Overview</Link>
					<Link href="#skills" className="cs-link">Skills</Link>
					<Link href="#projects" className="cs-link">Projects</Link>
					<Link href="#extras" className="cs-link">Other Info</Link>
				</Box> {/* End section for page jumping */}

				<Box id="contact-socials">
					<h1>Contact Me</h1>
					{ /* Text & link color: palette.primary.dark
					When link has been clicked, change it to contrastText */}
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

				<Box id="overview">
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
		</Container>
	);

}

export default CSPortfolio;