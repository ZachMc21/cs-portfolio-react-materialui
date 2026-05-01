import { Box, Typography } from "@mui/material";
import ConstructionNotice from "../../molecules/ConstructionNotice";

function ProjectsSwe() {

    return (
        <Box className="projects-category" id="swe-container" sx={{display: "none"}}>
            <ConstructionNotice title={"Software Engineering Projects"} />
        </Box>
    )
}

export default ProjectsSwe;