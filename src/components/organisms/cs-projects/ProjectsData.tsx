import { Box } from "@mui/material";
import ConstructionNotice from "../../molecules/ConstructionNotice";

function ProjectsData() {

    return (
        <Box className="projects-category" id="data-container" sx={{display: "none"}}>
            <ConstructionNotice title={"Data Science Projects"} />
        </Box>
    )
}

export default ProjectsData;