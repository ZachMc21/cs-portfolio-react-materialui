import { Box, FormControl, InputLabel, MenuItem, Select, Typography, type SelectChangeEvent } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";
import csLight from "../../styles/csLight";
import "./project-dropdown-select.css";
import ConstructionNotice from "../molecules/ConstructionNotice";
import NotFound from "../../pages/NotFound/NotFound";

export default function ProjectDropdownSelect() {
  const [selectedField, setSelectedField] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    //console.log(event);
    setSelectedField(event.target.value as string);
    renderSwitch(selectedField);
    console.log(selectedField);
  };

  function renderSwitch(selected: string) {
    switch(selected) {
      case "webdev-projects":
        //return <WebdevProjects />
      case "swe-projects":
        //return <SoftwareProjects />
      case "data-projects": 
        //return <DataProjects />      
      case "gamedev-projects":
        //return <GamedevProjects />

      default:
        <NotFound/>
    };
  }

  return (
    <Box>
      <FormControl id="project-dropdown-formcontrol"
          sx={{ width: "18rem" }}>
        <InputLabel id="project-select-label">
          <Typography sx={{ color: csLight.palette.primary.contrastText }}>Choose a field...</Typography>
        </InputLabel>
        <Select
          variant="standard"
          labelId="project-select-label"
          value={selectedField}
          onChange={handleChange}
          disableUnderline
          IconComponent={(props) => (<KeyboardArrowDownIcon {...props}/>)}
          id="project-select"
        >
          <MenuItem disabled value="">
            <Typography>Choose a field...</Typography>
          </MenuItem>
          <MenuItem value={"webdev-projects"}>
            <Typography className="dropdown">Web Development</Typography>
          </MenuItem>
          <MenuItem value={"swe-projects"} className="cs-menu-option">
            <Typography className="dropdown">Software Engineering</Typography>
          </MenuItem>
          <MenuItem value={"data-projects"} className="cs-menu-option">
            <Typography className="dropdown">Data Science</Typography>
          </MenuItem>
          <MenuItem value={"gamedev-projects"} className="cs-menu-option">
            <Typography className="dropdown">Game Development</Typography>
          </MenuItem>
        </Select>
      </FormControl>
      <Box>
      </Box>
    </Box>
  );
}