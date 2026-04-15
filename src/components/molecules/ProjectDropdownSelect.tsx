import { Box, FormControl, InputLabel, MenuItem, Select, Typography, type SelectChangeEvent } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useEffect } from "react";
import csLight from "../../styles/csLight";
import "./project-dropdown-select.css";
import NotFound from "../../pages/NotFound/NotFound";
import ProjectsWebdev from "../organisms/cs-projects/ProjectsWebdev";

export default function ProjectDropdownSelect() {
  var selectedFieldValue: string;
  const [selectedField, setSelectedField] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    //console.log(event);
    setSelectedField(event.target.value as string);
    selectedFieldValue = event.target.value;
    //console.log(selectedFieldValue);
    renderSwitch(selectedFieldValue);
  };


  function renderSwitch(selected: string) {
    switch(selected) {
      case "webdev":
        console.log("Showing webdev projects");
        hideExcept("webdev");
        return;
      case "swe":
        console.log("Showing swe projects");
        hideExcept("swe");
        return;
      case "data": 
        console.log("Showing data projects");
        hideExcept("data");
        return;  
      case "gamedev":
        console.log("Showing gamedev projects");
        hideExcept("gamedev");
        return;
      default:
        <NotFound/>
    };
  }

  function hideExcept(selected: string) {
    console.log("Hiding all elements except " + selected);
    var menuItems: Array<HTMLElement> = [];
    var menuItemsTemp: HTMLCollectionOf<Element> = document.getElementsByClassName("projects-category");
    for(var i=0; i<menuItemsTemp.length; i++) {
      menuItems[i] = menuItemsTemp[i] as HTMLElement;
      if(menuItems[i].id==(selected+"-container")) {
        menuItems[i].style.display = "block";
      }
      else {
        menuItems[i].style.display = "none";
      }
    }
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
          <MenuItem value={"webdev"}>
            <Typography className="dropdown">Web Development</Typography>
          </MenuItem>
          <MenuItem value={"swe"} className="cs-menu-option">
            <Typography className="dropdown">Software Engineering</Typography>
          </MenuItem>
          <MenuItem value={"data"} className="cs-menu-option">
            <Typography className="dropdown">Data Science</Typography>
          </MenuItem>
          <MenuItem value={"gamedev"} className="cs-menu-option">
            <Typography className="dropdown">Game Development</Typography>
          </MenuItem>
        </Select>
      </FormControl>
      
    </Box>
  );
}