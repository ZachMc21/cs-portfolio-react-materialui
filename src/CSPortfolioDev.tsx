
import { Box, Container, Switch, ThemeProvider, Typography } from '@mui/material';
import Footer from './custom_components/Footer';
import homepageTheme from "./themes/theme_cs";

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Route, Router, Routes } from 'react-router-dom';

function CSPortfolioDev() {
	
	return (
		<Container id="cs-portfolio">

			<ThemeProvider theme={homepageTheme}>

				<Box id="name">
					<Typography id="first-name">
						Zach
					</Typography>
					<Typography id="last-name">
						Magloughlin
					</Typography>
				</Box> {/* End header */}

				<Box id="section-links">
					<Typography>Jump to section...</Typography>
					<a href="#contact-socials">Contact Me</a>
					<a href="#overview">Overview</a>
					<a href="#skills">Skills</a>
					<a href="#projects">Projects</a>
					<a href="#extras">Other Info</a>
				</Box> {/* End section for page jumping */}

				<Box id="contact-socials">
					<h1>Contact Me</h1>
					<Box className="contact-socials" id="email">
						<MailOutlineIcon />
						<Typography>Email</Typography>
					</Box>
					<Box className="contact-socials" id="linked-in">
						<LinkedInIcon />
						<Typography>LinkedIn</Typography>
					</Box>
					<Box className="contact-socials" id="git-hub">
						<GitHubIcon />
						<Typography>GitHub</Typography>
					</Box>
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

export default CSPortfolioDev;