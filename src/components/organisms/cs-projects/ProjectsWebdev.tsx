import { Box, Link, Typography } from "@mui/material";
import "../../../styles/cs-projects-webdev.scss";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const photosPath: string = "/src/assets/projects/";
const webdevPhotos = [
  { src: photosPath + "webdev-cs-portfolio_01.png", width: 1263, height: 579 },
  { src: photosPath + "webdev-cs-portfolio_02.png", width: 658, height: 520 },
  { src: photosPath + "webdev-cs-portfolio_03.png", width: 658, height: 739 },
];

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
                    <Typography className="project-desc">Its <a href="/">parent project</a> is a collection of sites that I've built for fun as ways to learn new skills and polish existing ones.</Typography>
                </Box>
                <Box className="project-skills-gallery-container">
                    <Box className="project-skills">
                    <Typography>react file organization</Typography>
                    <Typography>react router</Typography>
                    <Typography>scss/sass</Typography>
                    <Typography>design</Typography>
                    <Typography>animations</Typography>
                </Box>
                <Box className="project-stack-gallery">
                    <Box className="project-stack">
                        <Box className="tech-logo-name">
                            <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-1" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="40" width="auto" /></Box>
                            <Typography className="subtitle">React</Typography>
                        </Box>
                        <Box className="tech-logo-name">
                            <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-3" src="/src/assets/logos/vite.svg" height="40" width="auto" /></Box>
                            <Typography className="subtitle">Vite</Typography>
                        </Box>
                        <Box className="tech-logo-name">
                            <Box className="tech-logo-container"><img className="tech-logo-hz slide-bck-center anim-delay-5" src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" height="40" width="auto" /></Box>
                            <Typography className="subtitle">SASS</Typography>
                        </Box>
                        <Box className="tech-logo-name">
                            <Box className="tech-logo-container"><img className="tech-logo-hz slide-bck-center anim-delay-7" src="/src/assets/logos/mui.svg" /></Box>
                            <Typography className="subtitle">Material UI</Typography>
                        </Box>
                        <Box className="tech-logo-name">
                            <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-9" src="https://animista.net/images/animista-logo-small.svg" height="40" width="auto" /></Box>
                            <Typography className="subtitle">Animista</Typography>
                        </Box>
                    </Box>
                    <RowsPhotoAlbum photos={webdevPhotos} targetRowHeight={400} rowConstraints={{ singleRowMaxHeight: 700 }}></RowsPhotoAlbum>
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