import { Box, Typography } from "@mui/material";
import ConstructionNotice from "../../molecules/ConstructionNotice";

function ProjectsGamedev() {

    return (
        <Box className="projects-category" id="gamedev-container" sx={{display: "none"}}>
            <ConstructionNotice title={"Game Development Projects"} />
        </Box>
    )
}

export default ProjectsGamedev;