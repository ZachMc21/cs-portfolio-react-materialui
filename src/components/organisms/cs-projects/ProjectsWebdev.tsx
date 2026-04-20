import { Box, Link, Typography } from "@mui/material";
import "../../../styles/cs-projects-webdev.scss";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function ProjectsWebdev() {

    return (
        <Box className="projects-category" id="webdev-container" sx={{ display: "none" }}>

            <Box className="project-item">
                <Box className="project-item-header">
                    <Typography className="project-item-title">CS Portfolio v2</Typography>
                    <Link className="project-item-link" href="/cs-portfolio"><OpenInNewIcon></OpenInNewIcon></Link>
                </Box>
                <Box className="project-desc-container">
                    <Typography className="project-desc">My previous portfolio page was very basic, built quickly for the sake of having something to expand on my resume.</Typography> 
                    <Typography className="project-desc">This new page is a larger project and has a more polished design.</Typography>
                    <Typography className="project-desc">Its parent project is a collection of sites that I've built for fun as ways to learn new skills and polish existing ones.</Typography>
                </Box>
                <Box className="lg-container">
                    <Box className="project-skills">
                        <Typography className="">react file organization</Typography>
                        <Typography className="">react router</Typography>
                        <Typography className="">scss/sass</Typography>
                        <Typography className="">design</Typography>
                        <Typography className="">animations</Typography>
                    </Box>
                    <Box className="project-stack">
                        <Box className="tech-logo-container"><img className="tech-logo slide-bck-center anim-delay-1" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="40" width="auto" /></Box>
                        <Box className="tech-logo-container"><img className="tech-logo slide-bck-center anim-delay-3" src="/src/assets/logos/vite.svg" height="40" width="auto" /></Box>
                        <Box className="tech-logo-container"><img className="tech-logo slide-bck-center anim-delay-5" src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" height="40" width="auto" /></Box>
                        <Box className="tech-logo-container"><img className="tech-logo slide-bck-center anim-delay-7" src="/src/assets/logos/mui.svg" /></Box>
                        <Box className="tech-logo-container"><img className="tech-logo slide-bck-center anim-delay-9" src="https://animista.net/images/animista-logo-small.svg" height="40" width="auto" /></Box>
                    </Box>
                    <Box className="project-screenshots">

                    </Box>
                </Box>
            </Box>

            <Box className="project-item">
                <Box>
                    <Typography className="project-item-title">Omnia WorkSpace</Typography>
                </Box>
            </Box>

            <Box className="project-item">
                <Box>
                    <Typography className="project-item-title">High Grade Website Maintenance</Typography>
                </Box>
            </Box>

            <Box className="project-item">
                <Box>
                    <Typography className="project-item-title">CS Portfolio v1</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ProjectsWebdev;