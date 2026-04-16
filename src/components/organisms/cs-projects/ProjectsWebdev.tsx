import { Box, Typography } from "@mui/material";

function ProjectsWebdev() {

    return (
        <Box className="projects-category" id="webdev-container" sx={{ display: "none" }}>

            <Box className="project-item">
                <Box>
                    <Typography className="project-item-title">CS Portfolio v2</Typography>
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