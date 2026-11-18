import { Box, Typography } from "@mui/material";
import "../../../styles/cs-portfolio/projects-categories.scss";
import "react-photo-album/rows.css";

//const photosPath: string = "/src/assets/projects/";

// Logo image imports
import KotlinLogo from "/logos/kotlin.png";
import JavaLogo from "/logos/java.png";
import JUnitLogo from "/logos/junit.svg";


function ProjectsSwe() {

    return (
        <Box className="projects-category" id="swe-container" sx={{ display: "none" }}>

            <Box className="project-item">
                <Box className="project-item-header">
                    <Typography className="project-item-title">Smart Barbell</Typography>
                </Box>
                <Box className="project-desc-container">
                    <Typography className="project-desc">A group of students from Design II needed an app to complement their project.</Typography> 
                    <Typography className="project-desc">The Design II students decided to tackle the problem of weightlifting injuries. This Android app is a complement to their hardware by giving the user a visual and/or audio indicator when their lifting is imbalanced.</Typography>
                    <Typography className="project-desc">Collaborators: Hannah Harling and Kaelyn Boutin</Typography>
                </Box>
                <Box className="project-skills-gallery-container">
                    <Box className="project-skills">
                        <Typography>database design</Typography>
                        <Typography>technical presentations</Typography>
                    </Box>
                    <Box className="project-stack project-stack-hz">
                        <Box className="tech-logo-name">
                            <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-1" src={KotlinLogo} height="40" width="auto" /></Box>
                            <Typography className="subtitle">Kotlin</Typography>
                        </Box>
                        <Box className="tech-logo-name">
                            <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-3" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg" height="40" width="auto" /></Box>
                            <Typography className="subtitle">Android Studio</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box> {/* End Smart Barbell */}

            <Box className="project-item">
                <Box className="project-item-header">
                    <Typography className="project-item-title">Clue Game</Typography>
                </Box>
                <Box className="project-desc-container">
                    <Typography className="project-desc">A singleplayer digital version of the board game Clue.</Typography>
                </Box>
                <Box className="project-skills-gallery-container">
                    <Box className="project-skills">
                        <Typography>object-oriented programming</Typography>
                        <Typography>unit testing</Typography>
                        <Typography>version control</Typography>
                    </Box>
                    <Box className="project-stack project-stack-hz">
                        <Box className="tech-logo-name">
                            <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-1" src={JavaLogo} height="40" width="auto" /></Box>
                            <Typography className="subtitle">Java</Typography>
                        </Box>
                        <Box className="tech-logo-name">
                            <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-3" src={JUnitLogo} height="40" width="auto" /></Box>
                            <Typography className="subtitle">JUnit</Typography>
                        </Box>
                        <Box className="tech-logo-name">
                            <Box className="tech-logo-container"><img className="tech-logo-hz slide-bck-center anim-delay-9" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Eclipse-SVG.svg" height="40" width="auto" /></Box>
                            <Typography className="subtitle">Eclipse IDE</Typography>
                        </Box>
                        <Box className="tech-logo-name">
                            <Box className="tech-logo-container"><img className="tech-logo-hz" src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Git-icon-black.svg" height="40" width="auto" /></Box>
                            <Typography className="subtitle">Git</Typography>
                        </Box>
                        <Box className="tech-logo-name">
                            <Box className="tech-logo-container"><img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" height="40" width="auto" /></Box>
                            <Typography className="subtitle">GitHub</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box> {/* End Clue Gmae */}
        </Box>

    )
}

export default ProjectsSwe;